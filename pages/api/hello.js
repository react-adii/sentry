// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withSentry } from '@sentry/nextjs'

const handler = async (req, res) => {
  res.status(200).json(res)
}
export default withSentry(handler)

