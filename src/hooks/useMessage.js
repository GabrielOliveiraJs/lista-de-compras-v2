import toast from 'react-hot-toast'

export function useMessage() {

    const createMessage = (message, type) => {
        if (type === 'success') {
            return toast.success(message, {
                style: {
                    border: '1px solid #57cc99',
                    padding: '16px',
                    color: '#57cc99',
                },
                iconTheme: {
                    primary: '#57cc99',
                    secondary: '#FFFAEE',
                }
            })
        } else if (type === 'error') {
            return toast.success(message, {
                style: {
                    border: '1px solid #ef233c',
                    padding: '16px',
                    color: '#ef233c',
                },
                iconTheme: {
                    primary: '#ef233c',
                    secondary: '#FFFAEE',
                }
            })
        }

    }

    return { createMessage }
}