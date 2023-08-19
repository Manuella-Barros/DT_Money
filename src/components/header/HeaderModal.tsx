import * as Dialog from '@radix-ui/react-dialog';
import * as Style from './Header.styles';
import { FormError } from '../../pages/home/Home.styles'
import Input from '../input/Input';
import { X, ArrowCircleUp, ArrowCircleDown } from '@phosphor-icons/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js';
import postTransactions from '../../fetch/postTransactions';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { GetTransaction } from '../../fetch/getTransactions';

const schema = z.object({
    description: z.string().min(3, "Minimo 3 caracteres"),
    price: z.number({ invalid_type_error: "Insira um número"}).nonnegative("Insira valores positivos"),
    category: z.string().min(3, "Minimo 3 caracteres"),
    type: z.string({invalid_type_error:"Escolha uma opção"})
})
type Data = z.infer<typeof schema>;

function HeaderModal() {
    const { setDispatch } = useContext(GlobalContext);
    const { register, handleSubmit, formState:{errors}, reset} = useForm<Data>({
        resolver: zodResolver(schema),
    });

    function handleFormSubmit(data: Data){
        postTransactions(data).then((res: GetTransaction) => {
            setDispatch({
                type: 'SET_TRANSACTION',
                payload: res,
            })
        });
        reset();
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild >
                <Style.SearchTransactionButton>Criar transação</Style.SearchTransactionButton>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Style.DialogOverlay/>
                <Style.DialogContent>
                    <Style.DialogCloseContainer>
                        <Dialog.Close asChild onClick={() => reset()}>
                            <X size={24} />
                        </Dialog.Close>
                    </Style.DialogCloseContainer>

                    <Dialog.Title>Nova Transação</Dialog.Title>

                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <Style.DialogContentInput>
                            <Input 
                                register={{...register('description')}} type={'text'} placeholder={'Descrição'}
                            />
                            {errors.description && <FormError>{errors.description.message?.toString()}</FormError>}

                            <Input 
                                register={{...register('price', {
                                    setValueAs: v => v.length > 0 ? Number(v) : '',
                                })}} 
                                type={'number'} 
                                placeholder={'Preço'}
                            />
                            {errors.price && <FormError>{errors.price.message?.toString()}</FormError>}

                            <Input 
                                register={{...register('category')}} 
                                type={'text'} 
                                placeholder={'Categoria'}
                            />
                            {errors.category && <FormError>{errors.category.message?.toString()}</FormError>}
                        </Style.DialogContentInput>
    
                        <Style.TransationType>
                            <input value= 'income' type="radio" id='income' {...register('type')} />
                            <Style.SingleTransationType htmlFor="income" data-type='income' $styleType={'income'}>
                                <ArrowCircleUp size={20} />
                                Entrada
                            </Style.SingleTransationType>
    
                            <input type="radio" value={'outcome'} id='outcome' {...register('type')} />
                            <Style.SingleTransationType htmlFor="outcome" data-type='outcome' $styleType={'outcome'}>
                                <ArrowCircleDown size={20} />
                                Saída
                            </Style.SingleTransationType>
                        </Style.TransationType>
                        <div style={{ textAlign: 'center'}}>
                            {
                                errors?.type && <FormError>{errors.type.message?.toString()}</FormError>
                            }
                        </div>
    
                        <div>
                            <Style.RegisterButton type="submit">
                                Cadastrar
                            </Style.RegisterButton>
                        </div>
                    </form>
                </Style.DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export default HeaderModal;