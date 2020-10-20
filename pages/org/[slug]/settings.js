import { useRouter } from 'next/router'
import useSWR from 'swr'

const Settings = () => {
  const router = useRouter()
  const { slug } = router.query

  async function Fetch(...args) {
    const res = await fetch(...args)
    const body = await res.json()
    return body
  }

  const { data, error } = useSWR(`/api/props/org/${slug}`, Fetch)

return <p>Settings with slug: {slug} and data: {data?.ad.company}</p>
}

export default Settings