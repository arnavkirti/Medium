import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono()

app.post('/api/v1/signup', (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  return c.text('Signup')
})

app.post('/api/v1/signin', (c) => {
  return c.text('Login')
})

app.post('/api/v1/blog', (c) => {
  return c.text('Create blog')
})

app.put('/api/v1/blog', (c) => {
  return c.text('Update blog')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Get blog')
})

export default app
