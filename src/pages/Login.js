import { LoginForm } from "components/LoginForm/LoginForm";
import { RegisterLoginBase } from "./RegisterLoginBase/RegisterLoginBase";
import { StyledMainDiv } from "./Register.styled";
import { animated , useTransition} from 'react-spring';
export const LoginPage = () => {
    const transitions = useTransition(true, {
    from: { opacity: 0, transform: 'translateY(-100%)' },
    enter: {
      opacity: 1,
      transform: 'translateY(0)',
      transition: 'all 150ms',
    },
    leave: { opacity: 0, transform: 'translateY(-100%)' },
    delay: 250,
  })
    return (
 transitions(
          (styles, item) =>
         item && (
       <animated.div style={{ ...styles, overflowY: 'hidden' }}>
            <StyledMainDiv >
        <RegisterLoginBase/>
            <LoginForm />
                 </StyledMainDiv>
                 </animated.div>
                 ))
       
    )
}