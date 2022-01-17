.navbar {
    background-color: grey;
    width: 100%;
    height: 60px;
    position: relative;
    top: 80px;
    transition: all 1s ease;
    z-index: 1;
    justify-content: center;
    text-align: center;
    align-items: center;
  
    ul {
      text-align: center;
      align-items: center;
      white-space: nowrap;
      display: grid;
      grid-template-columns: repeat(6, auto);
      grid-gap: 10px;
      list-style: none;
      text-align: center;
      width: 100%;
      justify-content: center;
      margin-right: 2rem;
      margin-top: 10px;
      position: absolute;
  
      li {
        display: flex;
        align-items: center;
        height: 80px;
        a {
          color: white;
          font-weight: bold;
          text-decoration: none;
          font-size: 1.2rem;
        }
        a:hover {
          text-decoration: none;
          color: $mainColor2;
        }
      }
    }
  }