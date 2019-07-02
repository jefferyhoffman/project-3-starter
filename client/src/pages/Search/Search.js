import React, { Component } from 'react';
import { Input, Select, FormBtn } from "../../components/Form";
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';
import '../Search/search.css';

class Search extends Component {
  static contextType = AuthContext;

  render() {

    return (
      <>
        <div>
          <main className="wrapper">
            <section className="section parallax bg1">
            </section>
            <section className="section static">
              <Link to='/allsearch'>
                <h1 className='searchmain'>Spirited Drinks</h1>
                <h3 className='tag-search'>Alchoholic drink that suits your Spirit!</h3>
              </Link>
            </section>
            <section className="section parallax bg2">
            </section>
            <section className="section static">
              <Link to='/allsearch'>
                <h1 className='searchmain'>Non-Alcoholic</h1>
                <h3 className='tag-search'>Look for the one that speaks to you!</h3>
              </Link>
            </section>
            <section className="section parallax bg3">
            </section>
            <section className="section static">
              <Link to='/allsearch'>
                <h1 className='searchmain'>Optional-Alcohol</h1>
                <h3 className='tag-search'>To be or not to be!</h3>
              </Link>
            </section>
            <section className="section parallax bg4">
            </section>
            <section className="section static">
              <Link to='/allsearch'>
                <h1 className='searchmain'>Cocktails</h1>
                <h3 className='tag-search'>Shake it up!</h3>
              </Link>
            </section>
            <section className="section parallax bg5">
            </section>
            <section className="section static">
              <Link to='/allsearch'>
                <h1 className='searchmain'>Unknown Drinks</h1>
                <h3 className='tag-search'>Don't belive in labels!</h3>
              </Link>
            </section>
            <section className="section parallax bg6">
            </section>
            <section className="section static">
              <Link to='/allsearch'>
                <h1 className='searchmain'>Mixed Drinks</h1>
                <h3 className='tag-search'>It's not complicated!</h3>
              </Link>
            </section>
            <section className="section parallax bg7">
            </section>
            <section className="section static">
              <Link to='/allsearch'>
                <h1 className='searchmain'>Shots</h1>
                <h3 className='tag-search'>That's called a party!</h3>
              </Link>
            </section>
            <section className="section parallax bg8">
            </section>
            <section className="section static">
              <Link to='/allsearch'>
                <h1 className='searchmain'>Homemade Liqueur</h1>
                <h3 className='tag-search'>That's gonna be good!</h3>
              </Link>
            </section>
            <section className="section parallax bg9">
            </section>
            <section className="section static">
              <Link to='/allsearch'>
                <h1 className='searchmain'>Punch/Party Drink</h1>
                <h3 className='tag-search'>Let's get this Party started!</h3>
              </Link>
            </section>
            <section className="section parallax bg10">
            </section>
            <section className="section static">
              <Link to='/allsearch'>
                <h1 className='searchmain'>Beer</h1>
                <h3 className='tag-search'>Always Chill!</h3>
              </Link>
            </section>
            <section className="section parallax bg11">
            </section>
            <section className="section static">
              <Link to='/allsearch'>
                <h1 className='searchmain'>Soda</h1>
                <h3 className='tag-search'>Love the Fizz!</h3>
              </Link>
            </section>
            <section className="section parallax bg12">
            </section>
            <section className="section static">
              <Link to='/allsearch'>
                <h1 className='searchmain'>Coffe/Tea</h1>
                <h3 className='tag-search'>Cafe is your thing!</h3>
              </Link>
            </section>
            <section className="section parallax bg13">
            </section>
            <section className="section static">
              <Link to='/allsearch'>
                <h1 className='searchmain'>Cocoa</h1>
                <h3 className='tag-search'>Death by choclate!</h3>
              </Link>
            </section>
            <section className="section parallax bg14">
            </section>
            <section className="section static">
              <Link to='/allsearch'>
                <h1 className='searchmain'>Milk/Float</h1>
                <h3 className='tag-search'>Inspired by Diners maybe!</h3>
              </Link>
            </section>
            <section className="section parallax bg15">
            </section>
            <section className="section static">
              <Link to='/allsearch'>
                <h1 className='searchmain'>Drink a random</h1>
                <h3 className='tag-search'>In for a surprise!</h3>
              </Link>
            </section>
          </main>
        </div>
      </>

    );
  }
}

export default Search;

