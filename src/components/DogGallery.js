import React, {useCallback, useEffect, useState} from "react";

const GET_DOG_PHOTO_URL = "https://dog.ceo/api/breeds/image/random"

const Button = ({ onClick }) => {
  useEffect(() => {
    console.log("On Click reference changed")
  }, [onClick])
  return (
    <button onClick={onClick}>Get a dog!</button>
  )
}

function DogPhoto({ src }) {
  return (
    <img src={src} />
  )
}

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);

  const getDogPhoto = useCallback(async () => {
    try {
      const response = await fetch(GET_DOG_PHOTO_URL)
      const data = await response.json()
      setDogPhotos((prevDogPhotos) => ([...prevDogPhotos, data.message]))
    } catch (err) {
      console.error("error!!!", err)
    }
  }, [])

  useEffect(() => {
    getDogPhoto()
  }, [getDogPhoto])

  const doIHaveDogs = dogPhotos.length > 0

  return (
    <div>
      <h1>Dog Gallery</h1>
      {doIHaveDogs
        ? dogPhotos.map((dogPhoto, index) => (
            <DogPhoto src={dogPhoto} key={index} />
          ))
        : <span>Get your first dog by clicking the button!</span>
      }
      <Button onClick={getDogPhoto} />
    </div>
  )
}

export default DogGallery
