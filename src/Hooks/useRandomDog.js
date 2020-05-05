import {useCallback, useEffect, useState} from "react";

const GET_DOG_PHOTO_URL = "https://dog.ceo/api/breeds/image/random"

const useRandomDog = () => {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(true);

  const getDogPhoto = useCallback(async () => {
    try {
      const response = await fetch(GET_DOG_PHOTO_URL)
      const data = await response.json()
      setDogImage(data.message)
      setLoading(false)
    } catch (err) {
      console.error("error!!!", err)
    }
  }, [])

  useEffect(() => {
    getDogPhoto()
  }, [getDogPhoto])

  return {
    dogImage,
    loading
  }
}

export { useRandomDog }
