import { FC, useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { Wrapper } from 'components/wrapper'
import { Container } from 'components/container'
import { Card } from 'components/card'
import usePets from 'hooks/usePets'
import type { Pet } from 'types/pet'
import './Home.css'

const Home: FC = () => {
  const perPage = 9
  const { allPets, featuredPets } = usePets()
  const [pageCount, setPageCount] = useState<number>(1)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [visiblePets, setVisiblePets] = useState<Pet[]>([])
  const [searchValue, setSearchValue] = useState<string>('')

  const handlePageClick = ({ selected }: any) => setCurrentPage(selected + 1)

  useEffect(() => {
    if (allPets.length > 0) {
      setVisiblePets(allPets.slice(0, 6))
      let pageCount = 1
      pageCount += parseInt(((allPets.length - 6) / perPage).toString())
      pageCount += (allPets.length - 6) % perPage > 0 ? 1 : 0
      setPageCount(pageCount)
    }
  }, [allPets])

  useEffect(() => {
    if (currentPage === 1) setVisiblePets(allPets.slice(0, 6))
    if (currentPage > 1) {
      const startPetIndex = 6 + (currentPage - 2) * perPage
      const endPetIndex = startPetIndex + perPage
      setVisiblePets(allPets.slice(startPetIndex, endPetIndex))
    }
  }, [currentPage, allPets])

  useEffect(() => {
    if (searchValue.length > 0) {
      setVisiblePets(
        allPets.filter(
          pet =>
            pet.Species.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
            pet.Breed.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
            pet.Owner.toLowerCase().indexOf(searchValue.toLowerCase()) > -1,
        ),
      )
    } else {
      setCurrentPage(1)
      setVisiblePets(allPets.slice(0, 6))
    }
  }, [searchValue, allPets])

  return (
    <Wrapper className="home-wrapper">
      <Container className="home-container">
        <input
          type="text"
          className="search-input"
          placeholder="search the pets"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        {currentPage === 1 && searchValue.length === 0 && (
          <>
            <h1 className="heading">Featured Pets</h1>
            <div className="card-group">
              {featuredPets.map((pet, index) => (
                <Card
                  key={index}
                  featured={true}
                  breed={pet.Breed}
                  name={pet['Pets name']}
                  owner={pet.Owner}
                  species={pet.Species}
                  dob={pet.DOB}
                  imgSrc={pet.Picture}
                  summary={pet.Summary}
                />
              ))}
            </div>
          </>
        )}
        <h1 className="heading">All Pets</h1>
        <div className="card-group">
          {visiblePets.map((pet, index) => (
            <Card
              key={index}
              featured={pet.featured}
              breed={pet.Breed}
              name={pet['Pets name']}
              owner={pet.Owner}
              species={pet.Species}
              dob={pet.DOB}
              imgSrc={pet.Picture}
              summary={pet.Summary}
            />
          ))}
        </div>
        {searchValue.length === 0 && (
          <ReactPaginate
            previousLabel={'prev'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        )}
      </Container>
    </Wrapper>
  )
}

export default Home
