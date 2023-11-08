import Select, { components } from 'react-select';
import { ReactComponent as SelectArrowSvg } from '../../images/selectarrow.svg';

const options = [
    { value: 'easy', label: <div style={{ display: 'flex', gap:'5px', width:'100%'}}><span style={{ color: '#00D7FF'}}>●</span> Easy</div>},
  { value: 'normal', label: <div style={{ display: 'flex', gap:'5px', width:'100%'}}><span style={{ color: '#24D40C' }}>●</span> Normal</div> },
  { value: 'hard', label: <div style={{ display: 'flex', gap:'5px', width:'100%'}}><span style={{ color: '#DB0837' }}>●</span> Hard</div> },
];
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <SelectArrowSvg />
    </components.DropdownIndicator>
  );
};
const customStyles = {
     container: (provided, state) => ({
        ...provided,
      width:'100px',
  
  }),
  control: (provided, state) => ({
        ...provided,
      width:'90px',
        borderColor: 'transparent',
        backgroundColor: 'transparent',
    boxShadow: 'none', 
    cursor: 'pointer',
 '&:hover': {
     backgroundColor: 'transparent',
     boxShadow: 'none',
       borderColor: 'transparent',
    },
  }),
  menu: (provided) => ({
    ...provided,
      width: '90px',
      height: '78px',
        borderRadius: '10px',
      background: '#FFF',
      padding: '7px 12px',
      position: 'absolute',
      top: '-30px',
left: '-5px',
boxShadow: '3px 4px 4px 0px rgba(21, 57, 90, 0.05), -3px -4px 4px 0px rgba(21, 57, 90, 0.05)',
    }),
    option: (provided, state) => ({
        ...provided,
        cursor: 'pointer',
        paddingLeft: '0',
        paddingRight: '0',
                 margin: state.data === options[1] ? '4px 0' : '0', 
           color: '#B9C3C8',
fontFamily: 'HelveticaNeueCyr',
fontSize: '14px',
fontStyle: 'normal',
fontWeight: '400',
lineHeight: '0',
        letterSpacing: '0.28px',
backgroundColor: 'transparent',
 '&:hover': {
     backgroundColor: 'transparent',
     color: '#282828',
    },
  }),
 indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
    }),
   dropdownIndicator: base => ({
    ...base,
    backgroundImage: `url('../../images/selectarrow.svg')`,
    backgroundRepeat: 'no-repeat',
       backgroundSize: 'contain',
    padding: '0px',
  }),
valueContainer: (provided, state) => ({
    ...provided,
    paddingRight: '0px',
  paddingLeft: '15px',
    }),
    indicatorsContainer: (provided, state) => ({
    ...provided,
    width: '5px'
    }),
   
 
 };

export const SelectLevel = ({ dataFunc ,currentValue}) => {
  
    return (
        <Select
            onChange={dataFunc}
            options={options}
            components={{ DropdownIndicator }}
            styles={customStyles}
            value={options.find(option => option.value === currentValue)}
        />
    )
  
}