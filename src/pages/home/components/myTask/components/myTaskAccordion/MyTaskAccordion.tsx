import { Accordion } from "radix-ui"
import { AccordionHeader } from "./components/AccordionHeader"
import { AccordionTask } from "./components/accordionTask/AccordionTask"
import type { Task } from "../../../../models/taskProps"

interface MyTaskAccordionProps {
  title: string
  tasks: Task[]
}

export const MyTaskAccordion: React.FC<
  MyTaskAccordionProps
> = ({ title, tasks }) => {
  return (
    <Accordion.Root
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <Accordion.Item value="item-1">
        <AccordionHeader title={title} />
        <Accordion.Content>
          {tasks.map((task) => (
            <AccordionTask task={task} key={task.id} />
          ))}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}
