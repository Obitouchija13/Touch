import { useRouter } from "next/router";

export default function Table() {
    const router = useRouter()

    return(<div>
        {router.query.id}{router.query.email}
        
    </div>
    )
    
}