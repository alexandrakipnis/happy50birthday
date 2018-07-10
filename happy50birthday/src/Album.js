import React from 'react'
import Gallery from 'react-photo-gallery'
import Photo from './Photo'
import './Album.css'
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc'

const photos = [
  { src: 'https://rawgit.com/alexandrakipnis/photos/master/IMG_0603.JPG', width: 1, height: 1 },
  { src: 'https://rawgit.com/alexandrakipnis/photos/master/IMG_0912.JPG', width: 2, height: 3 },
  { src: 'https://rawgit.com/alexandrakipnis/photos/master/IMG_1225.JPG', width: 3, height: 3 },
  { src: 'https://rawgit.com/alexandrakipnis/photos/master/IMG_6559.JPG', width: 3, height: 4 },
  { src: 'https://rawgit.com/alexandrakipnis/photos/master/IMG_4794.jpg', width: 4, height: 3 },
  { src: 'https://rawgit.com/alexandrakipnis/photos/master/IMG_4924.JPG', width: 2.5, height: 3 },
  { src: 'https://rawgit.com/alexandrakipnis/photos/master/IMG_5291.JPG', width: 0.75, height: 1 },
  { src: 'https://rawgit.com/alexandrakipnis/photos/master/IMG_5435.JPG', width: 3, height: 4 },
  { src: 'https://rawgit.com/alexandrakipnis/photos/master/IMG_5755.JPG', width: 3, height: 4 },
  { src: 'https://rawgit.com/alexandrakipnis/photos/master/IMG_6538.JPG', width: 2, height: 3 },
  { src: 'https://rawgit.com/alexandrakipnis/photos/master/IMG_4936.JPG', width: 2, height: 3 },
  { src: 'https://rawgit.com/alexandrakipnis/photos/master/IMG_6569.JPG', width: 4, height: 3 }
]

const SortablePhoto = SortableElement(Photo)
const SortableGallery = SortableContainer(({photos}) => {
  return <Gallery photos={photos} ImageComponent={SortablePhoto}/>
})

class Album extends React.Component {
  constructor(){
    super()
    this.onSortEnd = this.onSortEnd.bind(this)
    this.state = {
      photos: photos,
    }
  }
  onSortEnd ({ oldIndex, newIndex }) {
    this.setState({
      photos: arrayMove(this.state.photos, oldIndex, newIndex),
    })
  }
  render() {
    return (
      <div>
        <h2>Try dragging and dropping the photos to different spots...</h2>
        <SortableGallery axis={"xy"} photos={this.state.photos} onSortEnd={this.onSortEnd} />
      </div>
    )
  }
}
export default Album