import { useRouter } from 'next/router'

const Settings = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p>Settings with slug: {slug}</p>
}

export default Settings