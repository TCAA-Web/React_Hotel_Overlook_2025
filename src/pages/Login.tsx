import { Form, useActionData } from 'react-router'
import { Wrapper } from '../components/Shared/Wrapper'
import { TextField } from '../components/Shared/TextField'
import { Label } from '../components/Shared/Label'
import { Typography } from '../components/Shared/Typography'
import { Button } from '../components/Shared/Button'
import { useEffect } from 'react'

export const Login = () => {
  const actionData = useActionData()

  useEffect(() => {
    console.log(actionData)
  }, [actionData])

  return (
    <>
      <Typography variant='b'>{actionData ? actionData.username + 'signed in' : null}</Typography>
      <Wrapper width='50%'>
        <Form method='post'>
          <Label htmlFor='username'>
            <Typography variant='p'>Username</Typography>
            <TextField withBorder type='text' name='username' />
          </Label>
          <Label htmlFor='password'>
            <Typography variant='p'>Password</Typography>
            <TextField withBorder type='password' name='password' />
          </Label>
          <Button type='submit'>Send</Button>
        </Form>
      </Wrapper>
    </>
  )
}
