import React from 'react'
import { BentoGrid, BentoGridItem } from './BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
    return (
        <section id='about'>
            <BentoGrid>
                {gridItems.map((item) => (
                    <BentoGridItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                    >
                    </BentoGridItem>
                ))}
            </BentoGrid>
        </section>
    )
}

export default Grid