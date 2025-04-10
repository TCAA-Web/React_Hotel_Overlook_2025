import { Button } from '../components/Shared/Button'
import { Card } from '../components/Shared/Card'
import { CardContent } from '../components/Shared/CardContent'
import { CardMedia } from '../components/Shared/CardMedia'
import { Typography } from '../components/Shared/Typography'
import { Wrapper } from '../components/Shared/Wrapper'

export const Home = () => {
  return (
    <Wrapper width={'80%'}>
      <Typography weight='light' variant='h1'>
        This is a h1
      </Typography>
      <Typography weight='bold' variant='h2'>
        This is a h2
      </Typography>
      <Typography variant='h3'>This is a h3</Typography>
      <Typography variant='h4'>This is a h4</Typography>
      <Typography variant='h5'>This is a h5</Typography>
      <Typography variant='h6'>This is a h6</Typography>
      <Typography variant='p'>This is a paragraph</Typography>
      <Typography variant='b'>This is a b</Typography>
      <Wrapper>
        <Card elevation={1}>
          <CardMedia
            objectFit='cover'
            objectPosition='center'
            height='20vh'
            src='https://picsum.photos/500/600'
          />
          <CardContent>
            <Typography variant='h5' weight='light'>
              Elevation 1
            </Typography>
            <Typography variant='p' weight='light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, minus inventore saepe harum sunt
              quis odio est repudiandae.Optio, minus inventore saepe harum sunt quis odio est repudiandae.
            </Typography>
            <Wrapper style={{ marginTop: '8px' }} dir='row'>
              <Button id='share-btn' aria-label='Share to twitter'>
                Share
              </Button>
            </Wrapper>
          </CardContent>
        </Card>
        <Card elevation={2}>
          <CardMedia
            objectFit='cover'
            objectPosition='center'
            height='20vh'
            src='https://picsum.photos/500/600'
          />
          <CardContent>
            <Typography variant='h5'>Elevation 2</Typography>
            <Typography variant='p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, minus inventore saepe harum sunt
              quis odio est repudiandae.Optio, minus inventore saepe harum sunt quis odio est repudiandae.
            </Typography>
            <Wrapper style={{ marginTop: '8px' }} dir='row'>
              <Button id='share-facebook-btn' aria-label='Share to facebook'>
                Share
              </Button>
              <Button id='like-btn' aria-label='Save as liked'>
                Like
              </Button>
            </Wrapper>
          </CardContent>
        </Card>
        <Card elevation={3}>
          <CardMedia
            objectFit='cover'
            objectPosition='center'
            height='20vh'
            src='https://picsum.photos/500/600'
          />
          <CardContent>
            <Typography variant='h5' weight='bold'>
              Elevation 3
            </Typography>
            <Typography variant='p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, minus inventore saepe harum sunt
              quis odio est repudiandae.Optio, minus inventore saepe harum sunt quis odio est repudiandae.
            </Typography>
            <Wrapper style={{ marginTop: '8px' }} dir='row'>
              <Button id='link-btn' aria-label='This is a link'>
                Link
              </Button>
            </Wrapper>
          </CardContent>
        </Card>
      </Wrapper>
    </Wrapper>
  )
}
