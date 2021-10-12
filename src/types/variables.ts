import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const dayDate = () => {

    const date: Date = new Date();
    const day: number =  date.getDate();
    const month: number =  date.getMonth();
    const year: number =  date.getFullYear();

    const fullDate: string = day + '.' + month + '.' + year;  

    return fullDate
}

const timeDate = () => {

    const date: Date = new Date();

    let hours: any =  date.getHours();
        hours = hours > 9 ? hours : '0' + hours;
    let minutes: any =  date.getMinutes();
        minutes = minutes > 9 ? minutes : '0' + minutes;
    let seconds: any =  date.getSeconds();
        seconds = seconds > 9 ? seconds : '0' + seconds;
    const fullDate: string =  hours + ':' + minutes + ' | ' + seconds + 'sec';  

    return fullDate
}



const CssTextField = styled(TextField, {
    shouldForwardProp: (props) => props !== "focusColor"
  })((p:any) => ({
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: p.defaultcolor
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: p.focusColor
    },
    "&:focus .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: p.focusColor
    },
    "& .MuiOutlinedInput-input": {
      color: "white"
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "white"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "white"
    },
    "& .MuiInputLabel-outlined": {
      color: p.focusColor
    },
    "&:hover .MuiInputLabel-outlined": {
      color: p.focusColor
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: p.focusColor
    },

    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: p.focusColor
      }
    },

    background: "rgb(42 42 44)",
    color: "white"
  }));




export {dayDate, timeDate, CssTextField}