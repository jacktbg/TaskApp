import { Accordion } from "radix-ui"
import { AccordionHeader } from "./components/AccordionHeader"
import { AccordionTask } from "./components/accordionTask/AccordionTask"
import type { Task } from "../../../../models/taskProps"
import React from "react"

interface MyTaskAccordionProps {
  title: string
  tasks: Task[]
}

const MyTaskAccordionComponent: React.FC<
  MyTaskAccordionProps
> = ({ title, tasks }) => {
  const count = tasks.length
  return (
    <Accordion.Root
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <Accordion.Item value="item-1">
        <AccordionHeader title={title} count={count} />
        <Accordion.Content>
          {tasks.map((task) => (
            <AccordionTask task={task} key={task.id} />
          ))}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}

export const MyTaskAccordion = React.memo(
  MyTaskAccordionComponent
)
