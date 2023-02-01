import Button from 'react-bootstrap/Button';

function Btn(props){
    const { text } = props;
    return(
        <div className="d-grid gap-2">
        <Button variant="primary" size='lg' type='submit'>{text}</Button>
        </div>
          )
};


export default Btn;