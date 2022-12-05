import React from "react";

function Body(){
    return(
<div>
<body className="magazine-layout">
<div className="magazine-column">
<article className="article">
<h2 className="article-title article-title--large">
<a href="#" className="article-link">Over <mark className="mark mark--primary">550</mark> arrests this week</a>                      
</h2>
<div className="article-excerpt">
<p>The Guarda Nacional Republicana (GNR) carried out several operations throughout the country. </p>
<p> Between November 11th-17th there were 561 people detained.</p>
</div>
<div className="article-author">
<div className="article-author-img">
<img src="https://assets.codepen.io/285131/author-3.png" />
</div>
<div className="article-author-info">
<dl>
<dt>Fernando Pessa</dt>
<dd>Reporter</dd>
</dl>
</div>
</div>
</article>
<article className="article">
<h2 className="article-title article-title--medium">
<a href="#" class="article-link">Man arrested for attempted murder in Lagos</a>
</h2>
<div className="article-creditation">
<p>By Inês Pedrosa, Andrew Van Dam, Jorge Gabriel and Mariana van Zeller</p>
</div>
</article>
</div>
<div className="magazine-column">
<article className="article">
<figure className="article-img">
<img src="images/burglary.png" />
</figure>
<h2 className="article-title article-title--medium">
<a href="#" className="article-link">Man killed by home owner during burglary</a>
</h2>
<div className="article-excerpt">
<p>A man has died following a stab wound while attempting a robbery at a residence in Funchal, with the case now being investigated by the Judiciary Police</p>
</div>
<div className="article-author">
<div className="article-author-img">
<img src="https://assets.codepen.io/285131/author-2.png" />
</div>
<div className="article-author-info">
<dl>
<dt>Oliver Balch</dt>
<dd>Editor</dd>
</dl>
</div>
</div>
</article>
</div>
<div className="magazine-column">
<article className="article">
<figure className="article-img">
<img src="images/drugs.png" />
</figure>
<h2 className="article-title article-title--small">
<a href="#" className="article-link">Drug related arrests up by <mark class="mark mark--secondary">40%</mark></a>
</h2>
<div className="article-creditation">
<p>By Jonathan O'Connell</p>
</div>
</article>
<article className="article">
<figure className="article-img">
<img src="images/robber.png" />
</figure>
<h2 className="article-title article-title--small">
<a href="#" className="article-link">Man arrested for violent robberies</a>
</h2>
<div className="article-creditation">
<p>By Jonathan O'Connell</p>
</div>
</article>
</div>
<div className="magazine-column">
<article className="article">
<h2 className="article-title article-title--medium">
<a href="#" className="article-link">Police bring down largest drug trafficking network in the west.</a>
</h2>
<div className="article-excerpt">
<p>The GNR seized drugs worth more than 100 thousand euros and several luxury cars, in an operation in which seven people were arrested and brought down what it considers to be the largest drug network operating in the west of the country...</p>
</div>
<div className="article-author">
<div className="article-author-img">
<img src="https://assets.codepen.io/285131/author-2.png" />
</div>
<div className="article-author-info">
<dl>
<dt>Oliver Balch</dt>
<dd>Editor</dd>
</dl>
</div>
</div>
</article>
</div>




</body>
</div>
 );
}

export default Body;      

//html structure front end 
// manually entered mock data
