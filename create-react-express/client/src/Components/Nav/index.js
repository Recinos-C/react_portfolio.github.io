import React from "react";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="margin-bottom: 20px;">
    <div class="container" style="max-width: 960px; padding: 0;">

        <a class="navbar-brand" style="padding: 30px; background-color:orange; color:antiquewhite">Christopher
            Recinos</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item ">
                    <a class="nav-link" href="index.html">About Me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="portfolio.html">Portfolio</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="Responsive.html">Contact</a>
                </li>
            </ul>
        </div>

    </div>
</nav>
  );
}

export default Nav;
