export const validate = (name: string, value: string) => {

    switch (name) {
        case 'name':
            if(value.length <= 4){
                return 'Username atleast have 5 letters'
            }else{
                return ''
            }

        case 'email':
            if(
                !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
            ){
                return 'Enter a valid email address'
            }else{
                return ''
            }

        case 'phone':
            if(
                !new RegExp(/^[0-9\-%]+$/).test(value)
            ){
                return'Phone should contains atleast 8 charaters  and only numbers'
            }else{
                return ''
            }

        case 'age':
            if(
                !new RegExp(/^[0-2\-%]+$/).test(value)
            ){
                return 'Age should contains atleast 1 charaters'
            }else{
                return ''
            }

        default:
            break;
    }
}