import React from 'react';

export default class Projects extends React.Component {
  render() {
    return (
      <div className="container sm text-left">
        <div className="flex flex-row border-b-2 py-4">
          {/* <div className="flex-1 px-2">
            <iframe src="https://www.youtube.com/embed/xJWXK42qN8o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div> */}
          <div className="flex-1">
            <h1 className="text-2xl font-black">
              Yeet A Sheep
            </h1>
            <div className="text-xl">
              A mobile game about punching sheep in the face.
            </div>
            <div className="mt-4">
              <a className="web" href="http://samedifferencegames.com/2021/03/04/yeet-a-sheep/">
                Website
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-row border-b-2 py-4">
          {/* <div className="flex-1 px-2">
            <img src="/matpad.png" alt="Matpad logo"/>
          </div> */}
          <div className="flex-1">
            <h1 className="text-2xl font-black">
              Matpad
            </h1>
            <div className="text-xl">
              Interactive notepad for simple math
            </div>
            <div className="mt-4">
              <a href="https://github.com/hfitzwater/matpad" className="web">
                Repository
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-row border-b-2 py-4">
          {/* <div className="flex-1 px-2">
            <img src="/blackjack.png" alt="blackjack"/>
          </div> */}
          <div className="flex-1">
            <h1 className="text-2xl font-black">
              Blackjack: Card Counting
            </h1>
            <div className="text-xl">
              Practice counting cards
            </div>
            <div className="mt-4">
              <a href="https://hfitzwater.github.io/blackjack-counting/" className="web">
                Website
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-row border-b-2 py-4">
          {/* <div className="flex-1 px-2">
            <img src="/type-lyrics.png" alt="type-lyrics"/>
          </div> */}
          <div className="flex-1">
            <h1 className="text-2xl font-black">
              Type Lyrics
            </h1>
            <div className="text-xl">
              Practice typing with song lyrics
            </div>
            <div className="mt-4">
              <a href="http://type.hcf.works/" className="web">
                Website
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-row border-b-2 py-4">
          {/* <div className="flex-1 px-2">
            <img src="/flying-flip-phone.png" alt="flying-flip-phone"/>
          </div> */}
          <div className="flex-1">
            <h1 className="text-2xl font-black">
              Flying Flip Phone
            </h1>
            <div className="text-xl">
              Game jam theme: Ancient Technology
            </div>
            <div className="mt-4">
              <a href="https://appleskin.itch.io/flying-flip-phone" className="web">
                Website
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-row border-b-2 py-4">
          {/* <div className="flex-1 px-2">
            <img src="/lyricsmith.png" alt="lyricsmith"/>
          </div> */}
          <div className="flex-1">
            <h1 className="text-2xl font-black">
              LyricSmith
            </h1>
            <div className="text-xl">
              Songwriting web application
            </div>
            <div className="mt-4">
              <a href="http://lyricsmith.com/" className="web">
                Website
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}