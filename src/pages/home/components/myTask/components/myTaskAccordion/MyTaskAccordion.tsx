import { Accordion } from "radix-ui"
import { AccordionHeader } from "./components/AccordionHeader"
import { AccordionTask } from "./components/accordionTask/AccordionTask"
import type { Task } from "../../../../models/taskProps"
import React from "react"
import { useDroppable } from "@dnd-kit/core"

interface MyTaskAccordionProps {
  title: string
  tasks: Task[]
  droppableId: string
}

const MyTaskAccordionComponent: React.FC<
  MyTaskAccordionProps
> = ({ title, tasks, droppableId }) => {
  const { setNodeRef } = useDroppable({ id: droppableId })
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
          <div ref={setNodeRef}>
            {tasks.map((task) => (
              <AccordionTask task={task} key={task.id} />
            ))}
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}

export const MyTaskAccordion = React.memo(
  MyTaskAccordionComponent
)
