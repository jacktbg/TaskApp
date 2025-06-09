import styles from "../styles/assigneeTagOptions.module.scss"
import profile from "../assets/profile.png"

const options: string[] = [
  "Jack Ravn",
  "Daniel Ravn",
  "Emmanuel Ravn",
  "Gustavo Ravn",
]

interface AssigneeTagOptionsProps {
  setValue: (option: string) => void
  setImage: (option: string) => void
}

export const AssigneeTagOptions: React.FC<
  AssigneeTagOptionsProps
> = ({ setValue, setImage }) => {
  return (
    <div className={styles.options}>
      <h3 className={styles.title}>Assign too</h3>
      <ul className={styles.optionsWrapper}>
        {options.map((option, i) => (
          <li
            key={i}
            onClick={() => {
              setValue(option)
              setImage(profile)
            }}
            className={styles.option}
          >
            <img src={profile} className={styles.image} />
            <p className={styles.label}>{option}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
