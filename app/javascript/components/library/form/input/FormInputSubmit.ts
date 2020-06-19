import styled from 'styled-components'
import Colors from "../../Colors";

export const FormInputSubmit = styled.input.attrs(props => ({
  type: "submit",
  value: props.value || "Submit"
}))`
  background-color: ${Colors.orange};
  border-radius: 5px;
  color: ${Colors.green};
  font-weight: 800;
  height: 30px;
  width: 75px;
  `;