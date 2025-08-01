'use client'
import React from 'react'
import { List, Avatar } from 'antd';
import Link from 'next/link.js';
import { data } from '../datas/testdata.js'

export default function listCom() {
  return (
       <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<Link href={`/blog/${item.id}`}>{item.title}</Link>}
          description={item.desTxt}
        />
      </List.Item>
    )}
  />
  )
}
