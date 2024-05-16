"use client"
import {
  CircleF,
  GoogleMap,
  InfoWindow,
  Marker,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api"
import type { NextPage } from "next"
import { useMemo, useState } from "react"
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete"
import { MarkerIcon } from "../SVGs"

const Map: NextPage = () => {
  const [lat, setLat] = useState(9.07259)
  const [lng, setLng] = useState(7.44677)

  const libraries = useMemo(() => ["places"], [])
  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng])
  // State to manage the open/close state of the info window
  const [infoWindowOpen, setInfoWindowOpen] = useState(false)

  // State to manage the position of the marker
  const [markerPosition, setMarkerPosition] = useState(mapCenter)

  // Function to handle click event on the marker
  const handleMarkerClick = () => {
    setInfoWindowOpen(true)
  }

  // Function to handle close event on the info window
  const handleCloseInfoWindow = () => {
    setInfoWindowOpen(false)
  }

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  )

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
  })

  if (!isLoaded) {
    return <p>Loading...</p>
  }

  return (
    <div className="flex justify-center items-center">
      <div className="mr-4 w-[20%] h-[100vh] bg-[#333]">
        {/* render Places Auto Complete and pass custom handler which updates the state */}
        <PlacesAutocomplete
          onAddressSelect={(address) => {
            getGeocode({ address: address }).then((results) => {
              const { lat, lng } = getLatLng(results[0])
              console.log("lat,lng", lat, lng)
              setLat(lat)
              setLng(lng)
            })
          }}
        />
      </div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{
          width: "800px",
          height: "800px",
          borderRadius: 40,
          backgroundColor: "white",
        }}
        onLoad={(map) => console.log("Map Loaded")}
      >
        <Marker position={markerPosition} onClick={handleMarkerClick}>
          {infoWindowOpen && (
            <InfoWindow
              position={markerPosition}
              onCloseClick={handleCloseInfoWindow}
            >
              <div className="relative">
                {/* Info Window Content */}
                <div className="bg-white rounded-sm h-[203px] w-[580px] flex px-3">
                  <h2 className="text-xl font-bold mb-2">
                    Info Window Content
                  </h2>
                  <p>Some information here...</p>
                </div>

                {/* Close icon */}
                <button
                  className="hidden absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-800"
                  onClick={handleCloseInfoWindow}
                  style={{ display: "none" }} // Hide the close icon
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </InfoWindow>
          )}
        </Marker>
      </GoogleMap>
    </div>
  )
}

const PlacesAutocomplete = ({
  onAddressSelect,
}: {
  onAddressSelect?: (address: string) => void
}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: { componentRestrictions: { country: "us" } },
    debounce: 300,
    cache: 86400,
  })

  const renderSuggestions = () => {
    return data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
        description,
      } = suggestion

      return (
        <li
          className="py-2 px-1 bg-[lightcoral] my-1 mx-0 cursor-pointer"
          key={place_id}
          onClick={() => {
            setValue(description, false)
            clearSuggestions()
            onAddressSelect && onAddressSelect(description)
          }}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      )
    })
  }

  return (
    <div className="w-full h-full">
      <input
        value={value}
        className="w-[96%] mt-[84px] mx-auto mb-0 block border border-solid border-[yellow]"
        disabled={!ready}
        onChange={(e) => setValue(e.target.value)}
        placeholder="123 Stariway To Heaven"
      />

      {status === "OK" && (
        <ul className="w-[96%] m-0 overflow-x-hidden list-none my-o mx-auto block p-1">
          {renderSuggestions()}
        </ul>
      )}
    </div>
  )
}

export default Map
