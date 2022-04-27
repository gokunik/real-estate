const Home = () => {
  return (
    <div>
      <nav>
        <h2>PropAt</h2>
        <ul>
          <li>
            <a href="#!">Create Ads</a>
          </li>
          <li>
            <a href="#!">About Us</a>
          </li>
          <li>
            <a href="#!">Log In</a>
          </li>
          <li>
            <a href="#!">Resgister</a>
          </li>
        </ul>
      </nav>

      <div class="container">
        <div class="sidebar">
          <a href="#!" id="hide-filter-btn">
            <i class="fa fa-long-arrow-left"></i>
          </a>

          <h3>Filter</h3>

          <div class="select-options">
            <div class="select-wrapper">
              <select name="" id="">
                <option value="">Neighborhood</option>
                <option value="">one</option>
                <option value="">two</option>
              </select>
            </div>

            <div class="select-wrapper">
              <select name="" id="">
                <option value="">Type of house</option>
                <option value="">one</option>
                <option value="">two</option>
              </select>
            </div>

            <div class="select-wrapper">
              <select name="" id="">
                <option value="">Interior</option>
                <option value="">one</option>
                <option value="">two</option>
              </select>
            </div>
          </div>

          <p>Price</p>
          <div class="sliders">
            <div id="price-slider" class="slider"></div>
            <div class="display-values">
              <span class="start"></span>
              <span class="end"></span>
            </div>
          </div>

          <p>Floor Space</p>
          <div id="floor-space-slider" class="slider"></div>

          <p>Facilities</p>
          <div id="checkboxes">
            <label for="elevator">
              <input type="checkbox" id="elevator" value="elevator" />
              <span class="text">Elevator</span>
            </label>
            <label for="storage">
              <input type="checkbox" id="storage" value="storage" />
              <span class="text">Storage</span>
            </label>
            <label for="bath-tub">
              <input type="checkbox" id="bath-tub" value="bath tub" checked />
              <span class="text">Bath tub</span>
            </label>
            <label for="seperate-shower">
              <input
                type="checkbox"
                id="seperate-shower"
                value="seperate shower"
                checked
              />
              <span class="text">Sepearate shower</span>
            </label>
            <label for="fireplace">
              <input type="checkbox" id="fireplace" value="fireplace" />
              <span class="text">Fireplace</span>
            </label>
            <label for="swimming-pool">
              <input
                type="checkbox"
                id="swimming-pool"
                value="swimming pool"
                checked
              />
              <span class="text">Swimming pool</span>
            </label>
          </div>
        </div>

        <main>
          <a href="#!" id="filter-btn">
            Filter
          </a>
          <header>
            <h2>Short Stay</h2>
            <form action="">
              <input type="search" placeholder="Search..." />
            </form>
            <div class="select-wrapper">
              <select>
                <option value="">Rotterdam</option>
                <option value="">one</option>
                <option value="">two</option>
              </select>
            </div>
          </header>
          <div class="second-header">
            <div class="select-wrapper">
              <select>
                <option value="">Date descending</option>
              </select>
            </div>
            <button id="btn-stacked" class="fa fa-th-list"></button>
            <button id="btn-grid" class="fa fa-th"></button>
          </div>
          <div class="listings">
          <figure>
        <div>
          <img src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
          <small>Apartment</small>
        </div>
        <figcaption>
          <p class="price">$709 /month(.ex)</p>
          <p class="location"><i class="fa fa-map-marker"></i> Rotterdam</p>  
        </figcaption>
      </figure>
      
      <figure>
        <div>
          <img src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
          <small>Apartment</small>
        </div>
        <figcaption>
          <p class="price">$709 /month(ex.)</p>
          <p class="location"><i class="fa fa-map-marker"></i> Rotterdam</p>  
        </figcaption>
      </figure>
      
      <figure>
        <div>
          <img src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
          <small>Apartment</small>
        </div>
        <figcaption>
          <p class="price">$709 /month(ex.)</p>
          <p class="location"><i class="fa fa-map-marker"></i> Rotterdam</p>  
        </figcaption>
      </figure>
      
      <figure>
        <div>
          <img src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
          <small>Apartment</small>
        </div>
        <figcaption>
          <p class="price">$709 /month(ex.)</p>
          <p class="location"><i class="fa fa-map-marker"></i> Rotterdam</p>  
        </figcaption>
      </figure>
      
      <figure>
        <div>
          <img src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
          <small>Apartment</small>
        </div>
        <figcaption>
          <p class="price">$709 /month(ex.)</p>
          <p class="location"><i class="fa fa-map-marker"></i> Rotterdam</p>  
        </figcaption>
      </figure>
      
      <figure>
        <div>
          <img src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
          <small>Apartment</small>
        </div>
        <figcaption>
          <p class="price">$709 /month(ex.)</p>
          <p class="location"><i class="fa fa-map-marker"></i> Rotterdam</p>  
        </figcaption>
      </figure>
      
      <figure>
        <div>
          <img src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
          <small>Apartment</small>
        </div>
        <figcaption>
          <p class="price">$709 /month(ex.)</p>
          <p class="location"><i class="fa fa-map-marker"></i> Rotterdam</p>  
        </figcaption>
      </figure>
      
      <figure>
        <div>
          <img src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
          <small>Apartment</small>
        </div>
        <figcaption>
          <p class="price">$709 /month(ex.)</p>
          <p class="location"><i class="fa fa-map-marker"></i> Rotterdam</p>  
        </figcaption>
      </figure>
      
      <figure>
        <div>
          <img src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
          <small>Apartment</small>
        </div>
        <figcaption>
          <p class="price">$709 /month(ex.)</p>
          <p class="location"><i class="fa fa-map-marker"></i> Rotterdam</p>  
        </figcaption>
      </figure>
          </div>

    

          <div class="pagination">
            <a href="#!" id="prev">
              prev
            </a>
            <ul>
              <li class="active">
                <a href="#!">1</a>
              </li>
              <li>
                <a href="#!">2</a>
              </li>
              <li>
                <a href="#!">3</a>
              </li>
              <li>
                <a href="#!">4</a>
              </li>
              <li>
                <a href="#!">...</a>
              </li>
              <li>
                <a href="#!">30</a>
              </li>
            </ul>
            <a href="#!" id="next">
              next
            </a>
          </div>
        </main>

        <footer>
          <div>
            <h2>Download Real Estate App</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <div class="buttons">
              <button>
                <i class="fa fa-play"></i>
                Play store
              </button>
              <button>
                <i class="fa fa-apple"></i>
                App store
              </button>
            </div>
            <div class="social-links">
              <a href="#!">
                <li class="fa fa-facebook"></li>
              </a>
              <a href="#!">
                <li class="fa fa-twitter"></li>
              </a>
            </div>
            <small>Made by Abhinav</small>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
