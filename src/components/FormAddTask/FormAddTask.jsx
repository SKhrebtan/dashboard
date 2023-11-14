import { Formik, Field } from 'formik';
import { SelectLevel } from 'components/ReactSelect/SelectLevel';
import { SelectType } from 'components/ReactSelect/SelectType';
import { StyledForm, StyledClearSvg, StyledLineVertSvg,StyledStarSvg, StyledTrophySvg,StyledInputField,StyledLabel } from './FormAddTask.styled';
import { DatePickerTask } from 'components/DatePicker/DatePickerTask';
import { useDispatch,useSelector} from 'react-redux';
import { addCardThunk } from 'redux/cards/operations';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const FormAddTask = ({handleCloseModal}) => {
  const cardType = useSelector(state => state.cards.cardType);
  const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm } )=> {
                        if (!values.selectDate) {
            return toast.info('Choose date and time',  {
position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});
          }
 const year = values.selectDate.getFullYear();
const month = String(values.selectDate.getMonth() + 1).padStart(2, '0'); 
const day = String(values.selectDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        const formattedTime = values.selectDate.toLocaleTimeString('uk-UA', {
  hour: '2-digit',
  minute: '2-digit',
        });
      const { taskInput, selectLevel,selectType } = values;
      const newCard = {
        title: taskInput,
        difficulty: selectLevel,
        category: selectType,
        date: formattedDate,
        time: formattedTime,
        type: cardType
      }
      
               dispatch(addCardThunk(newCard))
      handleCloseModal()
      resetForm();
    };
    return(
     <Formik
          onSubmit={handleSubmit}
          initialValues={{
              selectLevel: 'Normal',
              selectType: 'Stuff',
              taskInput: '',
              selectDate: null,
            }}
     
        >
          {({ values, setFieldValue }) => (
            <StyledForm>
              <Field className='select-level' name="selectLevel">
                {({ field }) => (
                  <SelectLevel
                                {...field}
                                
                    currentValue={values.selectLevel}
                    dataFunc={option =>
                      setFieldValue('selectLevel', option.value)
                    }
                  />
                )}
              </Field>
 <Field name="selectType">
                {({ field }) => (
                  <SelectType
                    {...field}
                    currentValue={values.selectType}
                    dataFunc={option =>
                      setFieldValue('selectType', option.value)
                    }
                  />
                )}
                    </Field>
                     <div className='addtask-name-block'>
                    <StyledLabel $cardtype={cardType} htmlFor="taskInput">{cardType === 'Challenge' ? 'Challenge' : 'Create New Quest'}</StyledLabel>
              <StyledInputField type="text" name="taskInput" id="taskInput" $cardtype={ cardType} required/>
                    </div>
                     <Field name="selectDate">
                {({ field }) => (
                  <DatePickerTask
                                {...field}
                                 value={values}
                                dataFunc={(date) => setFieldValue('selectDate', date)}
                               
                  />
                )}
            </Field>
            <div className='btns-block'>
              <button className='clear-button' type='button' onClick={handleCloseModal}><StyledClearSvg /></button>
              <StyledLineVertSvg/>
              <button className='start-button' type="submit">START</button>
            </div>
            {cardType === "Challenge" ? <StyledTrophySvg/> : <StyledStarSvg />}
            </StyledForm>
          )}
        </Formik>
        )
}