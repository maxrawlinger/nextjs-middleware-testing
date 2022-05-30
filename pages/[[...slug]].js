import Link from 'next/link'

const DynamicPage = ({ data }) => {
    console.log('-------RENDER--------')
    console.log(data)
    return (
        <>
            <h1>Hello Next.js 👋</h1>
            <p>
                <Link href="/">
                    <a>Bring me back to the root</a>
                </Link>
            </p>
        </>
    )
}
export const getStaticProps = async ({params}) => {
    console.log({ 'SLUG:params': params })
    return {
    props: { data: true },
  }
}
export const getStaticPaths= async () => {
    const paths = [{ params: { slug: [''] } }, { params: { slug: ['page'] } }]
    return {
    paths: [...paths],
    fallback: true,
  }
}

export default DynamicPage
