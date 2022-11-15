import { useState, useEffect } from 'react'
import type { Pet } from 'types/pet'
import pets from 'configs/constants/pets.json'

const usePets = () => {
  const [allPets, setAllPets] = useState<Pet[]>([])
  const [featuredPets, setFeaturedPets] = useState<Pet[]>([])

  useEffect(() => {
    const allPets = pets.Pets.sort((a: Pet, b: Pet) => a['Pets name'].localeCompare(b['Pets name']))
    setAllPets(allPets)
    setFeaturedPets(allPets.filter((pet: Pet) => pet.featured).slice(0, 3))
  }, [])

  return { allPets, featuredPets }
}

export default usePets
