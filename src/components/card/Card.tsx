import { FC, memo } from 'react'
import { Container } from 'components/container'
import './Card.css'

interface Props {
  featured?: boolean
  owner: string
  name: string
  species: string
  dob: string
  breed: string
  summary: string
  imgSrc: string
}

const Card: FC<Props> = props => {
  const { featured, owner, name, species, dob, breed, summary, imgSrc } = props

  return (
    <Container maxWidth={380} className="card-container">
      <div className="card-header">
        <img width={380} height={300} src={`/assets/images/${imgSrc}`} alt="No Pet Img" />
        <p className="pet-name">{name}</p>
      </div>
      <div className="card-body">
        <div className="pet-dob">{dob}</div>
        <div className="pet-info">
          {featured && <div className="pet-tag">Featured</div>}
          <span className="pet-tag">{species}</span>
          <span className="pet-tag">{breed}</span>
          <span className="pet-tag">{owner}</span>
        </div>
        <p className="pet-summary">{summary}</p>
      </div>
    </Container>
  )
}

export default memo(Card)
