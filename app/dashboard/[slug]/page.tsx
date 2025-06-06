import Counter from "@/app/components/Counter"
type Params = Promise<{slug: string}>

export default async function DashboardPage({params}: {params: Params}) {
    const {slug} = await params
    return(
        <div>
            <h1>Dashboard page {slug}</h1>
            <Counter />
        </div>
        
    )
}
