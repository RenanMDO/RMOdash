import { Flex, Button, Stack } from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from "../components/Form/input"
import { useRouter } from "next/router";

type SigninFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object({
  email: yup.string().required('E-mail required').email('E-mail invalid'),
  password: yup.string().required('Password required')
})


export default function Signin() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState;

  const handleSignin: SubmitHandler<SigninFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    router.push('/dashboard');
  }
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignin)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            label="E-mail"
            type="email"
            error={errors.email}
            {...register('email')}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            error={errors.password}
            {...register('password')}
          />
        </Stack>
        <Button type="submit" mt="6" colorScheme="cyan" size="lg" isLoading={formState.isSubmitting} >Signin</Button>

      </Flex>
    </Flex>
  )
}
