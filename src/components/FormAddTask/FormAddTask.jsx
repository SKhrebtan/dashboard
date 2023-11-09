import { Formik, Field } from 'formik';
import { SelectLevel } from 'components/ReactSelect/SelectLevel';
import { SelectType } from 'components/ReactSelect/SelectType';
import { StyledForm } from './FormAddTask.styled';
import { DatePickerTask } from 'components/DatePicker/DatePickerTask';
const levelDefault = 'Normal';
const typeDefault = 'Stuff';

export const FormAddTask = () => {
    const handleSubmit = values => {
        console.log(values);
                if (!values.selectDate) {
            return alert('оберіть дату');
          }
 const year = values.selectDate.getFullYear();
const month = String(values.selectDate.getMonth() + 1).padStart(2, '0'); // Додаємо 1 до місяця, оскільки місяці починаються з 0
const day = String(values.selectDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        const formattedTime = values.selectDate.toLocaleString('uk-UA', {
  hour: '2-digit',
  minute: '2-digit',
});
        console.log(formattedDate);
        console.log(formattedTime);
    };
    return(
     <Formik
          onSubmit={handleSubmit}
          initialValues={{
              selectLevel: levelDefault,
              selectType: typeDefault,
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
                    <label className='task-label' htmlFor="taskInput">Create New Quest</label>
                    <Field type="text" name="taskInput" id="taskInput" required/>
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
              <button type="submit">Submit</button>
            </StyledForm>
          )}
        </Formik>
        )
}