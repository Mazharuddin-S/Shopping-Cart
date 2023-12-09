import { useNavigate, Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../Css/Navbar.css";

function Search() {
  const products = useSelector(store => store.products);
  const [recommend, setRecommendation] = useState([]);
  const inputRef = useRef();
  const redirect = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  function inputHandler(event) {
    let value = event.target.value.toLowerCase();
    let recommendation = document.getElementById("recommendation");
    let search = document.getElementById("search");

    clearTimeout(window.debounce);
    window.debounce = setTimeout(() => {
      let newRecommend = [];
      products.map(item => {
        if (
          item.title.toLowerCase().startsWith(value) ||
          item.title.toLowerCase().includes(value)
        ) {
          newRecommend.push(item);
          setRecommendation(newRecommend);
        }
      });
    }, 500);

    if (value == "") {
      recommendation.style.height = "0px";
    } else {
      recommendation.style.height = "30vh";
    }
    recommendation.style.overflow = "auto";
  }
  function focusHandler() {
    if (window.navigator.userAgentData.mobile == true) {
      redirect("/search", { replace: false });
      let search = document.getElementById("search");
      search.style.position = "absolute";
      search.style.left = "50%";
      search.style.transform = "translateX(-60%)";
    }
    window.scrollTo(0, 0);
  }
  function blurHandler(event) {
    let recommendation = document.getElementById("recommendation");
    recommendation.style.height = "0px";
  }

  return (
    <form action="" id="search">
      <div>
        <input
          type="text"
          ref={inputRef}
          onInput={inputHandler}
          onBlur={blurHandler}
          onFocus={focusHandler}
          placeholder="Search Products here"
        />
        <button>{<AiOutlineSearch />}</button>
      </div>
      <div id="recommendation">
        <ul>
          {recommend.map(item => {
            return (
              <li key={item.id}>
                <Link to={`/product?itemId=${item.id}#${item.id}`}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </form>
  );
}

export default Search;
