import React from 'react'
import { Card } from 'antd'
import { data } from '../../../datas/testdata.js'

// 动态的返回Metadata
export async function generateMetadata({ params }: { params: { id: string } }) {
    return {
        title: `blogList${params.id}`
    }
}


export default function Page({ params }: { params: { id: string } }) {
    const content = data.find((item) => item.id === params.id)
    return (
        <Card title={content?.title}>
            <p>Card content</p>
            <p>{content?.desTxt}</p>
        </Card>
    )
}
