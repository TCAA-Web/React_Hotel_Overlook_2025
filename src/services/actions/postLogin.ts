export const postLogin = async (request: Request) => {
  const formData = await request.formData()
  const name = formData.get('username')
  const password = formData.get('password')
  console.log('Success')
  return { username: name, password: password }
}
