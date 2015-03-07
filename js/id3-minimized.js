


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>JavaScript-ID3-Reader/id3-minimized.js at master · aadsm/JavaScript-ID3-Reader</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="aadsm/JavaScript-ID3-Reader" name="twitter:title" /><meta content="JavaScript-ID3-Reader - ID3 tags reader in JavaScript (ID3v1, ID3v2 and AAC)" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/78122?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/78122?v=3&amp;s=400" property="og:image" /><meta content="aadsm/JavaScript-ID3-Reader" property="og:title" /><meta content="https://github.com/aadsm/JavaScript-ID3-Reader" property="og:url" /><meta content="JavaScript-ID3-Reader - ID3 tags reader in JavaScript (ID3v1, ID3v2 and AAC)" property="og:description" />
      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="62DDDCE0:4CA1:9048D9F:54FB6DEF" name="octolytics-dimension-request_id" /><meta content="6034238" name="octolytics-actor-id" /><meta content="zethra" name="octolytics-actor-login" /><meta content="2a0651d699a8b9386a0587e3bd68e5b8e1e148695a3488317b069c707e879e2e" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="n3zEIHArKFZ8WyxvEz0KTT5RIV/bgVtBakjdp77//9sxKh1pO2v6z9fquoI0h2lu4rulz3bFhj79yh1UNrYPSQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-921a6618ae7b229a43ce137ab55010494d47d2a597128a4f98e2c781a05d581b.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-d3cfa727de9d78100769b0dc45d2783949e6b662ac84d36e8f51dd103f790e4a.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="677c0aa226cf860b60bcd65db25952d9">

      
  <meta name="description" content="JavaScript-ID3-Reader - ID3 tags reader in JavaScript (ID3v1, ID3v2 and AAC)">
  <meta name="go-import" content="github.com/aadsm/JavaScript-ID3-Reader git https://github.com/aadsm/JavaScript-ID3-Reader.git">

  <meta content="78122" name="octolytics-dimension-user_id" /><meta content="aadsm" name="octolytics-dimension-user_login" /><meta content="614697" name="octolytics-dimension-repository_id" /><meta content="aadsm/JavaScript-ID3-Reader" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="614697" name="octolytics-dimension-repository_network_root_id" /><meta content="aadsm/JavaScript-ID3-Reader" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/aadsm/JavaScript-ID3-Reader/commits/master.atom" rel="alternate" title="Recent Commits to JavaScript-ID3-Reader:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/orgs/FRC-3637-Daleks/dashboard" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/aadsm/JavaScript-ID3-Reader/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/aadsm/JavaScript-ID3-Reader/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/zethra" data-ga-click="Header, go to profile, text:username">
      <img alt="Ben Goldberg" class="avatar" data-user="6034238" height="20" src="https://avatars0.githubusercontent.com/u/6034238?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">zethra</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="aadsm/JavaScript-ID3-Reader">This repository</span>
    </li>
      <li>
        <a href="/aadsm/JavaScript-ID3-Reader/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="iKfEizJYR/1PZuWkHUs+GJb6QAf4SibKrPPyLRkCD+FwwsmlYwGnTeDDQ15kNOyatnzh5IrGrBC1A0C2GNv5IQ==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Cf8ty58EIYHokIDDe4gtP2GTCqJTNdTv00rdATUXvptLHFOPQBCC617/Bih68G1lLKWCIT1q2EdQlPxIkRekYg==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="614697" />

      <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/aadsm/JavaScript-ID3-Reader/watchers">
          21
        </a>
        <a href="/aadsm/JavaScript-ID3-Reader/subscription"
          class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>

  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/aadsm/JavaScript-ID3-Reader/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="KgCJfRc/OO4rfMyfZQUk5+yFW6QicEqEK5SwiCzcz7kQgnzSgFHvN+tR4wfD6+qCSyfWAGD21poMn5HDgP51Fg==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar aadsm/JavaScript-ID3-Reader">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/aadsm/JavaScript-ID3-Reader/stargazers">
          255
        </a>
</form>
    <form accept-charset="UTF-8" action="/aadsm/JavaScript-ID3-Reader/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="2k1HXXztsB5M+D0oSyA2ch+Uzo+wbKwHsnIr8ndeWCJZr4IfdcMGStc9a8wC0phBjbzD4uJuQ4IOsIN8+ym3jA==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Star this repository" title="Star aadsm/JavaScript-ID3-Reader">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/aadsm/JavaScript-ID3-Reader/stargazers">
          255
        </a>
</form>  </div>

  </li>

        <li>
          <a href="/aadsm/JavaScript-ID3-Reader/fork" class="minibutton with-count js-toggler-target tooltipped-n" title="Fork your own copy of aadsm/JavaScript-ID3-Reader to your account" aria-label="Fork your own copy of aadsm/JavaScript-ID3-Reader to your account" rel="facebox nofollow">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/aadsm/JavaScript-ID3-Reader/network" class="social-count">77</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/aadsm" class="url fn" itemprop="url" rel="author"><span itemprop="title">aadsm</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/aadsm/JavaScript-ID3-Reader" class="js-current-repository" data-pjax="#js-repo-pjax-container">JavaScript-ID3-Reader</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/aadsm/JavaScript-ID3-Reader/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/aadsm/JavaScript-ID3-Reader" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /aadsm/JavaScript-ID3-Reader">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/aadsm/JavaScript-ID3-Reader/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /aadsm/JavaScript-ID3-Reader/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/aadsm/JavaScript-ID3-Reader/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /aadsm/JavaScript-ID3-Reader/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/aadsm/JavaScript-ID3-Reader/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /aadsm/JavaScript-ID3-Reader/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/aadsm/JavaScript-ID3-Reader/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /aadsm/JavaScript-ID3-Reader/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/aadsm/JavaScript-ID3-Reader/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /aadsm/JavaScript-ID3-Reader/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/aadsm/JavaScript-ID3-Reader.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:aadsm/JavaScript-ID3-Reader.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/aadsm/JavaScript-ID3-Reader" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="github-windows://openRepo/https://github.com/aadsm/JavaScript-ID3-Reader" class="minibutton sidebar-button" title="Save aadsm/JavaScript-ID3-Reader to your computer and use it in GitHub Desktop." aria-label="Save aadsm/JavaScript-ID3-Reader to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/aadsm/JavaScript-ID3-Reader/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of aadsm/JavaScript-ID3-Reader as a zip file"
                   title="Download the contents of aadsm/JavaScript-ID3-Reader as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/aadsm/JavaScript-ID3-Reader/blob/fe76e1f318ed06eeeed84c35ef221b73c1fdf3d8/dist/id3-minimized.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:b30b72893407cd42142641417757d553 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/aadsm/JavaScript-ID3-Reader/blob/gh-13_readAsBinaryString/dist/id3-minimized.js"
               data-name="gh-13_readAsBinaryString"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-13_readAsBinaryString">
                gh-13_readAsBinaryString
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/aadsm/JavaScript-ID3-Reader/blob/gh-28_error-handling/dist/id3-minimized.js"
               data-name="gh-28_error-handling"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-28_error-handling">
                gh-28_error-handling
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/aadsm/JavaScript-ID3-Reader/blob/makefile/dist/id3-minimized.js"
               data-name="makefile"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="makefile">
                makefile
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/aadsm/JavaScript-ID3-Reader/blob/master/dist/id3-minimized.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/aadsm/JavaScript-ID3-Reader/blob/pr-26/dist/id3-minimized.js"
               data-name="pr-26"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="pr-26">
                pr-26
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="button-group right">
    <a href="/aadsm/JavaScript-ID3-Reader/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/aadsm/JavaScript-ID3-Reader" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">JavaScript-ID3-Reader</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/aadsm/JavaScript-ID3-Reader/tree/master/dist" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">dist</span></a></span><span class="separator">/</span><strong class="final-path">id3-minimized.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Michael Randolph" class="avatar" data-user="2012739" height="24" src="https://avatars3.githubusercontent.com/u/2012739?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/mrand01" rel="contributor">mrand01</a></span>
        <time datetime="2014-04-27T07:15:48Z" is="relative-time">Apr 27, 2014</time>
        <div class="commit-title">
            <a href="/aadsm/JavaScript-ID3-Reader/commit/4ed36143188d7dfec8cb7d93fcffc663fe5492c8" class="message" data-pjax="true" title="Removed document.write call and replaced with an appendChild call.

Replaced document.write call that adds VBScript with a document.appendChild call due to the document.write call failing when script is loaded asynchronously">Removed document.write call and replaced with an appendChild call.</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>2</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="aadsm" href="/aadsm/JavaScript-ID3-Reader/commits/master/dist/id3-minimized.js?author=aadsm"><img alt="António Afonso" class="avatar" data-user="78122" height="20" src="https://avatars0.githubusercontent.com/u/78122?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mrand01" href="/aadsm/JavaScript-ID3-Reader/commits/master/dist/id3-minimized.js?author=mrand01"><img alt="Michael Randolph" class="avatar" data-user="2012739" height="20" src="https://avatars1.githubusercontent.com/u/2012739?v=3&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="António Afonso" data-user="78122" height="24" src="https://avatars2.githubusercontent.com/u/78122?v=3&amp;s=48" width="24" />
            <a href="/aadsm">aadsm</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Michael Randolph" data-user="2012739" height="24" src="https://avatars3.githubusercontent.com/u/2012739?v=3&amp;s=48" width="24" />
            <a href="/mrand01">mrand01</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-info">
        26 lines (25 sloc)
        <span class="file-info-divider"></span>
      15.491 kb
    </div>
    <div class="file-actions">
      <div class="button-group">
        <a href="/aadsm/JavaScript-ID3-Reader/raw/master/dist/id3-minimized.js" class="minibutton " id="raw-url">Raw</a>
          <a href="/aadsm/JavaScript-ID3-Reader/blame/master/dist/id3-minimized.js" class="minibutton js-update-url-with-hash">Blame</a>
        <a href="/aadsm/JavaScript-ID3-Reader/commits/master/dist/id3-minimized.js" class="minibutton " rel="nofollow">History</a>
      </div><!-- /.button-group -->

        <a class="octicon-button tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/aadsm/JavaScript-ID3-Reader?branch=master&amp;filepath=dist%2Fid3-minimized.js" aria-label="Open this file in GitHub for Windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

            <form accept-charset="UTF-8" action="/aadsm/JavaScript-ID3-Reader/edit/master/dist/id3-minimized.js" aria-label="Clicking this button will fork this project so you can edit the file" class="tooltipped tooltipped-s inline-form edit-file-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="jODl5Sjrk9oVMGUPZXfcm9tL/g4BBbow5jpsZu15hGRgyMYyvr8j4hJ/OxYDWKvUi2Z3fddnAoRH2mCWSYkT8w==" /></div>
              <button class="web-edit-button"
                      type="submit"
                      data-hotkey="e"
                      data-disable-with>
                <span class="octicon octicon-pencil"></span>
              </button>
</form>
          <form accept-charset="UTF-8" action="/aadsm/JavaScript-ID3-Reader/delete/master/dist/id3-minimized.js" aria-label="Fork this project and delete file" class="tooltipped tooltipped-s inline-form delete-file-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Q+oRDdkcUBQsHflfws+j/fRIG0JFNuL4C5HGltQWP1dyW7Z1baYLohynDsMdaRHZD9ezROrmu/KS96tKusVZxQ==" /></div>
            <button class="web-edit-button"
                    type="submit"
                    data-disable-with>
              <span class="octicon octicon-trashcan "></span>
            </button>
</form>      </a>
    </div><!-- /.actions -->
  </div>
  
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-st">function</span> <span class="pl-en">y</span>(<span class="pl-vpf">h</span>,<span class="pl-vpf">g</span>,<span class="pl-vpf">b</span>){<span class="pl-s">var</span> c<span class="pl-k">=</span>g<span class="pl-k">||</span><span class="pl-c1">0</span>,d<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-s1"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span><span class="pl-k">==typeof</span> h<span class="pl-k">?</span>(d<span class="pl-k">=</span>b<span class="pl-k">||</span>h.<span class="pl-sc">length</span>,<span class="pl-s3">this</span>.<span class="pl-en">a</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">a</span>){<span class="pl-k">return</span> h.<span class="pl-s3">charCodeAt</span>(a<span class="pl-k">+</span>c)<span class="pl-k">&amp;</span><span class="pl-c1">255</span>})<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>unknown<span class="pl-pds">&quot;</span></span><span class="pl-k">==typeof</span> h<span class="pl-k">&amp;&amp;</span>(d<span class="pl-k">=</span>b<span class="pl-k">||</span>IEBinary_getLength(h),<span class="pl-s3">this</span>.<span class="pl-en">a</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">a</span>){<span class="pl-k">return</span> IEBinary_getByteAt(h,a<span class="pl-k">+</span>c)});<span class="pl-s3">this</span>.<span class="pl-en">l</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">f</span>){<span class="pl-k">for</span>(<span class="pl-s">var</span> v<span class="pl-k">=</span><span class="pl-s3">Array</span>(f),b<span class="pl-k">=</span><span class="pl-c1">0</span>;b<span class="pl-k">&lt;</span>f;b<span class="pl-k">++</span>)v[b]<span class="pl-k">=</span><span class="pl-v">this</span>.a(a<span class="pl-k">+</span>b);<span class="pl-k">return</span> v};<span class="pl-s3">this</span>.<span class="pl-en">h</span><span class="pl-k">=</span><span class="pl-st">function</span>(){<span class="pl-k">return</span> d};<span class="pl-s3">this</span>.<span class="pl-en">d</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">f</span>){<span class="pl-k">return</span> <span class="pl-c1">0</span><span class="pl-k">!=</span>(<span class="pl-v">this</span>.a(a)<span class="pl-k">&amp;</span><span class="pl-c1">1</span><span class="pl-k">&lt;&lt;</span>f)};<span class="pl-s3">this</span>.<span class="pl-en">w</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">a</span>){a<span class="pl-k">=</span>(<span class="pl-v">this</span>.a(a<span class="pl-k">+</span><span class="pl-c1">1</span>)<span class="pl-k">&lt;&lt;</span><span class="pl-c1">8</span>)<span class="pl-k">+</span><span class="pl-v">this</span>.a(a);<span class="pl-c1">0</span><span class="pl-k">&gt;</span>a<span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">+=</span><span class="pl-c1">65536</span>);<span class="pl-k">return</span> a};<span class="pl-s3">this</span>.<span class="pl-en">i</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">a</span>){<span class="pl-s">var</span> f<span class="pl-k">=</span><span class="pl-v">this</span>.a(a),b<span class="pl-k">=</span><span class="pl-v">this</span>.a(a<span class="pl-k">+</span><span class="pl-c1">1</span>),d<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-v">this</span>.a(a<span class="pl-k">+</span><span class="pl-c1">2</span>);a<span class="pl-k">=</span><span class="pl-v">this</span>.a(a<span class="pl-k">+</span><span class="pl-c1">3</span>);f<span class="pl-k">=</span>(((f<span class="pl-k">&lt;&lt;</span><span class="pl-c1">8</span>)<span class="pl-k">+</span>b<span class="pl-k">&lt;&lt;</span><span class="pl-c1">8</span>)<span class="pl-k">+</span>d<span class="pl-k">&lt;&lt;</span><span class="pl-c1">8</span>)<span class="pl-k">+</span>a;<span class="pl-c1">0</span><span class="pl-k">&gt;</span>f<span class="pl-k">&amp;&amp;</span>(f<span class="pl-k">+=</span><span class="pl-c1">4294967296</span>);<span class="pl-k">return</span> f};<span class="pl-s3">this</span>.<span class="pl-en">o</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">a</span>){<span class="pl-s">var</span> f<span class="pl-k">=</span><span class="pl-v">this</span>.a(a),b<span class="pl-k">=</span><span class="pl-v">this</span>.a(a<span class="pl-k">+</span><span class="pl-c1">1</span>);a<span class="pl-k">=</span><span class="pl-v">this</span>.a(a<span class="pl-k">+</span><span class="pl-c1">2</span>);f<span class="pl-k">=</span>((f<span class="pl-k">&lt;&lt;</span><span class="pl-c1">8</span>)<span class="pl-k">+</span>b<span class="pl-k">&lt;&lt;</span><span class="pl-c1">8</span>)<span class="pl-k">+</span>a;<span class="pl-c1">0</span><span class="pl-k">&gt;</span>f<span class="pl-k">&amp;&amp;</span>(f<span class="pl-k">+=</span><span class="pl-c1">16777216</span>);<span class="pl-k">return</span> f};<span class="pl-s3">this</span>.<span class="pl-en">c</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">f</span>){<span class="pl-k">for</span>(<span class="pl-s">var</span> b<span class="pl-k">=</span>[],d<span class="pl-k">=</span>a,e<span class="pl-k">=</span><span class="pl-c1">0</span>;d<span class="pl-k">&lt;</span>a<span class="pl-k">+</span>f;d<span class="pl-k">++</span>,e<span class="pl-k">++</span>)b[e]<span class="pl-k">=</span><span class="pl-s3">String</span>.<span class="pl-s3">fromCharCode</span>(<span class="pl-v">this</span>.a(d));<span class="pl-k">return</span> b.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)};<span class="pl-s3">this</span>.<span class="pl-en">e</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>,<span class="pl-vpf">d</span>){a<span class="pl-k">=</span><span class="pl-v">this</span>.l(a,b);<span class="pl-k">switch</span>(d.<span class="pl-s3">toLowerCase</span>()){<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>utf-16<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>utf-16le<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>utf-16be<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>b<span class="pl-k">=</span>d;<span class="pl-s">var</span> l,e<span class="pl-k">=</span><span class="pl-c1">0</span>,c<span class="pl-k">=</span><span class="pl-c1">1</span>;d<span class="pl-k">=</span><span class="pl-c1">0</span>;l<span class="pl-k">=</span><span class="pl-s3">Math</span>.<span class="pl-s3">min</span>(l<span class="pl-k">||</span>a.<span class="pl-sc">length</span>,a.<span class="pl-sc">length</span>);<span class="pl-c1">254</span><span class="pl-k">==</span>a[<span class="pl-c1">0</span>]<span class="pl-k">&amp;&amp;</span><span class="pl-c1">255</span><span class="pl-k">==</span>a[<span class="pl-c1">1</span>]<span class="pl-k">?</span>(b<span class="pl-k">=!</span><span class="pl-c1">0</span>,e<span class="pl-k">=</span><span class="pl-c1">2</span>)<span class="pl-k">:</span><span class="pl-c1">255</span><span class="pl-k">==</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line">a[<span class="pl-c1">0</span>]<span class="pl-k">&amp;&amp;</span><span class="pl-c1">254</span><span class="pl-k">==</span>a[<span class="pl-c1">1</span>]<span class="pl-k">&amp;&amp;</span>(b<span class="pl-k">=!</span><span class="pl-c1">1</span>,e<span class="pl-k">=</span><span class="pl-c1">2</span>);b<span class="pl-k">&amp;&amp;</span>(c<span class="pl-k">=</span><span class="pl-c1">0</span>,d<span class="pl-k">=</span><span class="pl-c1">1</span>);b<span class="pl-k">=</span>[];<span class="pl-k">for</span>(<span class="pl-s">var</span> m<span class="pl-k">=</span><span class="pl-c1">0</span>;e<span class="pl-k">&lt;</span>l;m<span class="pl-k">++</span>){<span class="pl-s">var</span> g<span class="pl-k">=</span>a[e<span class="pl-k">+</span>c],k<span class="pl-k">=</span>(g<span class="pl-k">&lt;&lt;</span><span class="pl-c1">8</span>)<span class="pl-k">+</span>a[e<span class="pl-k">+</span>d],e<span class="pl-k">=</span>e<span class="pl-k">+</span><span class="pl-c1">2</span>;<span class="pl-k">if</span>(<span class="pl-c1">0</span><span class="pl-k">==</span>k)<span class="pl-k">break</span>;<span class="pl-k">else</span> <span class="pl-c1">216</span><span class="pl-k">&gt;</span>g<span class="pl-k">||</span><span class="pl-c1">224</span><span class="pl-k">&lt;=</span>g<span class="pl-k">?</span>b[m]<span class="pl-k">=</span><span class="pl-s3">String</span>.<span class="pl-s3">fromCharCode</span>(k)<span class="pl-k">:</span>(g<span class="pl-k">=</span>(a[e<span class="pl-k">+</span>c]<span class="pl-k">&lt;&lt;</span><span class="pl-c1">8</span>)<span class="pl-k">+</span>a[e<span class="pl-k">+</span>d],e<span class="pl-k">+=</span><span class="pl-c1">2</span>,b[m]<span class="pl-k">=</span><span class="pl-s3">String</span>.<span class="pl-s3">fromCharCode</span>(k,g))}a<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">String</span>(b.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>));a.g<span class="pl-k">=</span>e;<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>utf-8<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>l<span class="pl-k">=</span><span class="pl-c1">0</span>;e<span class="pl-k">=</span><span class="pl-s3">Math</span>.<span class="pl-s3">min</span>(e<span class="pl-k">||</span>a.<span class="pl-sc">length</span>,a.<span class="pl-sc">length</span>);<span class="pl-c1">239</span><span class="pl-k">==</span>a[<span class="pl-c1">0</span>]<span class="pl-k">&amp;&amp;</span><span class="pl-c1">187</span><span class="pl-k">==</span>a[<span class="pl-c1">1</span>]<span class="pl-k">&amp;&amp;</span><span class="pl-c1">191</span><span class="pl-k">==</span>a[<span class="pl-c1">2</span>]<span class="pl-k">&amp;&amp;</span>(l<span class="pl-k">=</span><span class="pl-c1">3</span>);c<span class="pl-k">=</span>[];<span class="pl-k">for</span>(d<span class="pl-k">=</span><span class="pl-c1">0</span>;l<span class="pl-k">&lt;</span>e<span class="pl-k">&amp;&amp;</span>(b<span class="pl-k">=</span>a[l<span class="pl-k">++</span>],<span class="pl-c1">0</span><span class="pl-k">!=</span>b);d<span class="pl-k">++</span>)<span class="pl-c1">128</span><span class="pl-k">&gt;</span>b<span class="pl-k">?</span>c[d]<span class="pl-k">=</span><span class="pl-s3">String</span>.<span class="pl-s3">fromCharCode</span>(b)<span class="pl-k">:</span><span class="pl-c1">194</span><span class="pl-k">&lt;=</span>b<span class="pl-k">&amp;&amp;</span><span class="pl-c1">224</span><span class="pl-k">&gt;</span>b<span class="pl-k">?</span>(m<span class="pl-k">=</span>a[l<span class="pl-k">++</span>],c[d]<span class="pl-k">=</span><span class="pl-s3">String</span>.<span class="pl-s3">fromCharCode</span>(((b<span class="pl-k">&amp;</span><span class="pl-c1">31</span>)<span class="pl-k">&lt;&lt;</span><span class="pl-c1">6</span>)<span class="pl-k">+</span>(m<span class="pl-k">&amp;</span><span class="pl-c1">63</span>)))<span class="pl-k">:</span><span class="pl-c1">224</span><span class="pl-k">&lt;=</span>b<span class="pl-k">&amp;&amp;</span><span class="pl-c1">240</span><span class="pl-k">&gt;</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line">b<span class="pl-k">?</span>(m<span class="pl-k">=</span>a[l<span class="pl-k">++</span>],k<span class="pl-k">=</span>a[l<span class="pl-k">++</span>],c[d]<span class="pl-k">=</span><span class="pl-s3">String</span>.<span class="pl-s3">fromCharCode</span>(((b<span class="pl-k">&amp;</span><span class="pl-c1">255</span>)<span class="pl-k">&lt;&lt;</span><span class="pl-c1">12</span>)<span class="pl-k">+</span>((m<span class="pl-k">&amp;</span><span class="pl-c1">63</span>)<span class="pl-k">&lt;&lt;</span><span class="pl-c1">6</span>)<span class="pl-k">+</span>(k<span class="pl-k">&amp;</span><span class="pl-c1">63</span>)))<span class="pl-k">:</span><span class="pl-c1">240</span><span class="pl-k">&lt;=</span>b<span class="pl-k">&amp;&amp;</span><span class="pl-c1">245</span><span class="pl-k">&gt;</span>b<span class="pl-k">&amp;&amp;</span>(m<span class="pl-k">=</span>a[l<span class="pl-k">++</span>],k<span class="pl-k">=</span>a[l<span class="pl-k">++</span>],g<span class="pl-k">=</span>a[l<span class="pl-k">++</span>],b<span class="pl-k">=</span>((b<span class="pl-k">&amp;</span><span class="pl-c1">7</span>)<span class="pl-k">&lt;&lt;</span><span class="pl-c1">18</span>)<span class="pl-k">+</span>((m<span class="pl-k">&amp;</span><span class="pl-c1">63</span>)<span class="pl-k">&lt;&lt;</span><span class="pl-c1">12</span>)<span class="pl-k">+</span>((k<span class="pl-k">&amp;</span><span class="pl-c1">63</span>)<span class="pl-k">&lt;&lt;</span><span class="pl-c1">6</span>)<span class="pl-k">+</span>(g<span class="pl-k">&amp;</span><span class="pl-c1">63</span>)<span class="pl-k">-</span><span class="pl-c1">65536</span>,c[d]<span class="pl-k">=</span><span class="pl-s3">String</span>.<span class="pl-s3">fromCharCode</span>((b<span class="pl-k">&gt;&gt;</span><span class="pl-c1">10</span>)<span class="pl-k">+</span><span class="pl-c1">55296</span>,(b<span class="pl-k">&amp;</span><span class="pl-c1">1023</span>)<span class="pl-k">+</span><span class="pl-c1">56320</span>));a<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">String</span>(c.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>));a.g<span class="pl-k">=</span>l;<span class="pl-k">break</span>;<span class="pl-k">default</span><span class="pl-k">:</span>e<span class="pl-k">=</span>[];c<span class="pl-k">=</span>c<span class="pl-k">||</span>a.<span class="pl-sc">length</span>;<span class="pl-k">for</span>(l<span class="pl-k">=</span><span class="pl-c1">0</span>;l<span class="pl-k">&lt;</span>c;){d<span class="pl-k">=</span>a[l<span class="pl-k">++</span>];<span class="pl-k">if</span>(<span class="pl-c1">0</span><span class="pl-k">==</span>d)<span class="pl-k">break</span>;e[l<span class="pl-k">-</span><span class="pl-c1">1</span>]<span class="pl-k">=</span><span class="pl-s3">String</span>.<span class="pl-s3">fromCharCode</span>(d)}a<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">String</span>(e.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>));a.g<span class="pl-k">=</span>l}<span class="pl-k">return</span> a};<span class="pl-s3">this</span>.<span class="pl-en">f</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>){b()}}<span class="pl-s">var</span> B<span class="pl-k">=</span><span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>script<span class="pl-pds">&quot;</span></span>);B.<span class="pl-sc">type</span><span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>text/vbscript<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line">B.textContent<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Function IEBinary_getByteAt(strBinary, iOffset)<span class="pl-cce">\r\n\t</span>IEBinary_getByteAt = AscB(MidB(strBinary,iOffset+1,1))<span class="pl-cce">\r\n</span>End Function<span class="pl-cce">\r\n</span>Function IEBinary_getLength(strBinary)<span class="pl-cce">\r\n\t</span>IEBinary_getLength = LenB(strBinary)<span class="pl-cce">\r\n</span>End Function<span class="pl-cce">\r\n</span><span class="pl-pds">&quot;</span></span>;<span class="pl-s3">document</span>.<span class="pl-s3">getElementsByTagName</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>head<span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">0</span>].<span class="pl-s3">appendChild</span>(B);<span class="pl-st">function</span> <span class="pl-en">C</span>(<span class="pl-vpf">h</span>,<span class="pl-vpf">g</span>,<span class="pl-vpf">b</span>){<span class="pl-st">function</span> <span class="pl-en">c</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>,<span class="pl-vpf">e</span>,<span class="pl-vpf">c</span>,<span class="pl-vpf">f</span>,<span class="pl-vpf">g</span>){<span class="pl-s">var</span> k<span class="pl-k">=</span>d();k<span class="pl-k">?</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">===typeof</span> g<span class="pl-k">&amp;&amp;</span>(g<span class="pl-k">=!</span><span class="pl-c1">0</span>),b<span class="pl-k">&amp;&amp;</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">!=typeof</span> k.onload<span class="pl-k">?</span>(<span class="pl-s3">k</span>.<span class="pl-en">onload</span><span class="pl-k">=</span><span class="pl-st">function</span>(){<span class="pl-s1"><span class="pl-pds">&quot;</span>200<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>k.<span class="pl-sc">status</span><span class="pl-k">||</span><span class="pl-s1"><span class="pl-pds">&quot;</span>206<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>k.<span class="pl-sc">status</span><span class="pl-k">?</span>(k.fileSize<span class="pl-k">=</span>f<span class="pl-k">||</span>k.<span class="pl-s3">getResponseHeader</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Content-Length<span class="pl-pds">&quot;</span></span>),b(k))<span class="pl-k">:</span>e<span class="pl-k">&amp;&amp;</span>e({error<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>xhr<span class="pl-pds">&quot;</span></span>,xhr<span class="pl-k">:</span>k});k<span class="pl-k">=</span><span class="pl-c1">null</span>},e<span class="pl-k">&amp;&amp;</span>(<span class="pl-s3">k</span>.<span class="pl-en">onerror</span><span class="pl-k">=</span><span class="pl-st">function</span>(){e({error<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>xhr<span class="pl-pds">&quot;</span></span>,xhr<span class="pl-k">:</span>k});k<span class="pl-k">=</span><span class="pl-c1">null</span>}))<span class="pl-k">:</span><span class="pl-s3">k</span>.<span class="pl-en">onreadystatechange</span><span class="pl-k">=</span><span class="pl-st">function</span>(){<span class="pl-c1">4</span><span class="pl-k">==</span>k.<span class="pl-sc">readyState</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>200<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>k.<span class="pl-sc">status</span><span class="pl-k">||</span><span class="pl-s1"><span class="pl-pds">&quot;</span>206<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>k.<span class="pl-sc">status</span><span class="pl-k">?</span>(k.fileSize<span class="pl-k">=</span>f<span class="pl-k">||</span>k.<span class="pl-s3">getResponseHeader</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Content-Length<span class="pl-pds">&quot;</span></span>),b(k))<span class="pl-k">:</span>e<span class="pl-k">&amp;&amp;</span>e({error<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>xhr<span class="pl-pds">&quot;</span></span>,xhr<span class="pl-k">:</span>k}),k<span class="pl-k">=</span><span class="pl-c1">null</span>)}),</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line">k.<span class="pl-s3">open</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>GET<span class="pl-pds">&quot;</span></span>,a,g),k.overrideMimeType<span class="pl-k">&amp;&amp;</span>k.overrideMimeType(<span class="pl-s1"><span class="pl-pds">&quot;</span>text/plain; charset=x-user-defined<span class="pl-pds">&quot;</span></span>),c<span class="pl-k">&amp;&amp;</span>k.<span class="pl-s3">setRequestHeader</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Range<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>bytes=<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>c[<span class="pl-c1">0</span>]<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>c[<span class="pl-c1">1</span>]),k.<span class="pl-s3">setRequestHeader</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>If-Modified-Since<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>Sat, 1 Jan 1970 00:00:00 GMT<span class="pl-pds">&quot;</span></span>),k.<span class="pl-s3">send</span>(<span class="pl-c1">null</span>))<span class="pl-k">:</span>e<span class="pl-k">&amp;&amp;</span>e({error<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Unable to create XHR object<span class="pl-pds">&quot;</span></span>})}<span class="pl-st">function</span> <span class="pl-en">d</span>(){<span class="pl-s">var</span> a<span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-s3">window</span>.<span class="pl-s3">XMLHttpRequest</span><span class="pl-k">?</span>a<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">XMLHttpRequest</span><span class="pl-k">:</span><span class="pl-s3">window</span>.ActiveXObject<span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">ActiveXObject</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Microsoft.XMLHTTP<span class="pl-pds">&quot;</span></span>));<span class="pl-k">return</span> a}<span class="pl-st">function</span> <span class="pl-en">a</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>,<span class="pl-vpf">e</span>){<span class="pl-s">var</span> c<span class="pl-k">=</span>d();c<span class="pl-k">?</span>(b<span class="pl-k">&amp;&amp;</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">!=typeof</span> c.onload<span class="pl-k">?</span>(<span class="pl-s3">c</span>.<span class="pl-en">onload</span><span class="pl-k">=</span><span class="pl-st">function</span>(){<span class="pl-s1"><span class="pl-pds">&quot;</span>200<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line">c.<span class="pl-sc">status</span><span class="pl-k">||</span><span class="pl-s1"><span class="pl-pds">&quot;</span>206<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>c.<span class="pl-sc">status</span><span class="pl-k">?</span>b(<span class="pl-v">this</span>)<span class="pl-k">:</span>e<span class="pl-k">&amp;&amp;</span>e({error<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>xhr<span class="pl-pds">&quot;</span></span>,xhr<span class="pl-k">:</span>c});c<span class="pl-k">=</span><span class="pl-c1">null</span>},e<span class="pl-k">&amp;&amp;</span>(<span class="pl-s3">c</span>.<span class="pl-en">onerror</span><span class="pl-k">=</span><span class="pl-st">function</span>(){e({error<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>xhr<span class="pl-pds">&quot;</span></span>,xhr<span class="pl-k">:</span>c});c<span class="pl-k">=</span><span class="pl-c1">null</span>}))<span class="pl-k">:</span><span class="pl-s3">c</span>.<span class="pl-en">onreadystatechange</span><span class="pl-k">=</span><span class="pl-st">function</span>(){<span class="pl-c1">4</span><span class="pl-k">==</span>c.<span class="pl-sc">readyState</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>200<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>c.<span class="pl-sc">status</span><span class="pl-k">||</span><span class="pl-s1"><span class="pl-pds">&quot;</span>206<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>c.<span class="pl-sc">status</span><span class="pl-k">?</span>b(<span class="pl-v">this</span>)<span class="pl-k">:</span>e<span class="pl-k">&amp;&amp;</span>e({error<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>xhr<span class="pl-pds">&quot;</span></span>,xhr<span class="pl-k">:</span>c}),c<span class="pl-k">=</span><span class="pl-c1">null</span>)}),c.<span class="pl-s3">open</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>HEAD<span class="pl-pds">&quot;</span></span>,a,<span class="pl-k">!</span><span class="pl-c1">0</span>),c.<span class="pl-s3">send</span>(<span class="pl-c1">null</span>))<span class="pl-k">:</span>e<span class="pl-k">&amp;&amp;</span>e({error<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Unable to create XHR object<span class="pl-pds">&quot;</span></span>})}<span class="pl-st">function</span> <span class="pl-en">f</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">d</span>){<span class="pl-s">var</span> e,f;<span class="pl-st">function</span> <span class="pl-en">g</span>(<span class="pl-vpf">a</span>){<span class="pl-s">var</span> b<span class="pl-k">=~~</span>(a[<span class="pl-c1">0</span>]/e)<span class="pl-k">-</span>f;a<span class="pl-k">=~~</span>(a[<span class="pl-c1">1</span>]/e)<span class="pl-k">+</span><span class="pl-c1">1</span><span class="pl-k">+</span>f;<span class="pl-c1">0</span><span class="pl-k">&gt;</span>b<span class="pl-k">&amp;&amp;</span>(b<span class="pl-k">=</span><span class="pl-c1">0</span>);a<span class="pl-k">&gt;=</span>blockTotal<span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">=</span>blockTotal<span class="pl-k">-</span><span class="pl-c1">1</span>);<span class="pl-k">return</span>[b,a]}<span class="pl-st">function</span> <span class="pl-en">h</span>(<span class="pl-vpf">f</span>,<span class="pl-vpf">g</span>){<span class="pl-k">for</span>(;n[f[<span class="pl-c1">0</span>]];)<span class="pl-k">if</span>(f[<span class="pl-c1">0</span>]<span class="pl-k">++</span>,f[<span class="pl-c1">0</span>]<span class="pl-k">&gt;</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">f[<span class="pl-c1">1</span>]){g<span class="pl-k">&amp;&amp;</span>g();<span class="pl-k">return</span>}<span class="pl-k">for</span>(;n[f[<span class="pl-c1">1</span>]];)<span class="pl-k">if</span>(f[<span class="pl-c1">1</span>]<span class="pl-k">--</span>,f[<span class="pl-c1">0</span>]<span class="pl-k">&gt;</span>f[<span class="pl-c1">1</span>]){g<span class="pl-k">&amp;&amp;</span>g();<span class="pl-k">return</span>}<span class="pl-s">var</span> m<span class="pl-k">=</span>[f[<span class="pl-c1">0</span>]<span class="pl-k">*</span>e,(f[<span class="pl-c1">1</span>]<span class="pl-k">+</span><span class="pl-c1">1</span>)<span class="pl-k">*</span>e<span class="pl-k">-</span><span class="pl-c1">1</span>];c(a,<span class="pl-st">function</span>(<span class="pl-vpf">a</span>){<span class="pl-s3">parseInt</span>(a.<span class="pl-s3">getResponseHeader</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Content-Length<span class="pl-pds">&quot;</span></span>),<span class="pl-c1">10</span>)<span class="pl-k">==</span>d<span class="pl-k">&amp;&amp;</span>(f[<span class="pl-c1">0</span>]<span class="pl-k">=</span><span class="pl-c1">0</span>,f[<span class="pl-c1">1</span>]<span class="pl-k">=</span>blockTotal<span class="pl-k">-</span><span class="pl-c1">1</span>,m[<span class="pl-c1">0</span>]<span class="pl-k">=</span><span class="pl-c1">0</span>,m[<span class="pl-c1">1</span>]<span class="pl-k">=</span>d<span class="pl-k">-</span><span class="pl-c1">1</span>);a<span class="pl-k">=</span>{data<span class="pl-k">:</span>a.N<span class="pl-k">||</span>a.<span class="pl-sc">responseText</span>,offset<span class="pl-k">:</span>m[<span class="pl-c1">0</span>]};<span class="pl-k">for</span>(<span class="pl-s">var</span> b<span class="pl-k">=</span>f[<span class="pl-c1">0</span>];b<span class="pl-k">&lt;=</span>f[<span class="pl-c1">1</span>];b<span class="pl-k">++</span>)n[b]<span class="pl-k">=</span>a;g<span class="pl-k">&amp;&amp;</span>g()},b,m,k,<span class="pl-k">!!</span>g)}<span class="pl-s">var</span> k,r<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">y</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,<span class="pl-c1">0</span>,d),n<span class="pl-k">=</span>[];e<span class="pl-k">=</span>e<span class="pl-k">||</span><span class="pl-c1">2048</span>;f<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">===typeof</span> f<span class="pl-k">?</span><span class="pl-c1">0</span><span class="pl-k">:</span>f;blockTotal<span class="pl-k">=~~</span>((d<span class="pl-k">-</span><span class="pl-c1">1</span>)/e)<span class="pl-k">+</span><span class="pl-c1">1</span>;<span class="pl-k">for</span>(<span class="pl-s">var</span> q <span class="pl-k">in</span> r)r.hasOwnProperty(q)<span class="pl-k">&amp;&amp;</span><span class="pl-s1"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">===typeof</span> r[q]<span class="pl-k">&amp;&amp;</span>(<span class="pl-v">this</span>[q]<span class="pl-k">=</span>r[q]);<span class="pl-s3">this</span>.<span class="pl-en">a</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">a</span>){<span class="pl-s">var</span> b;h(g([a,</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line">a]));b<span class="pl-k">=</span>n[<span class="pl-k">~~</span>(a/e)];<span class="pl-k">if</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span><span class="pl-k">==typeof</span> b.<span class="pl-sc">data</span>)<span class="pl-k">return</span> b.<span class="pl-sc">data</span>.<span class="pl-s3">charCodeAt</span>(a<span class="pl-k">-</span>b.offset)<span class="pl-k">&amp;</span><span class="pl-c1">255</span>;<span class="pl-k">if</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>unknown<span class="pl-pds">&quot;</span></span><span class="pl-k">==typeof</span> b.<span class="pl-sc">data</span>)<span class="pl-k">return</span> IEBinary_getByteAt(b.<span class="pl-sc">data</span>,a<span class="pl-k">-</span>b.offset)};<span class="pl-s3">this</span>.<span class="pl-en">f</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>){h(g(a),b)}}(<span class="pl-st">function</span>(){a(h,<span class="pl-st">function</span>(<span class="pl-vpf">a</span>){a<span class="pl-k">=</span><span class="pl-s3">parseInt</span>(a.<span class="pl-s3">getResponseHeader</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Content-Length<span class="pl-pds">&quot;</span></span>),<span class="pl-c1">10</span>)<span class="pl-k">||-</span><span class="pl-c1">1</span>;g(<span class="pl-k">new</span> <span class="pl-en">f</span>(h,a))},b)})()};(<span class="pl-st">function</span>(<span class="pl-vpf">h</span>){<span class="pl-s3">h</span>.<span class="pl-en">FileAPIReader</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">g</span>,<span class="pl-vpf">b</span>){<span class="pl-k">return</span> <span class="pl-st">function</span>(<span class="pl-vpf">c</span>,<span class="pl-vpf">d</span>){<span class="pl-s">var</span> a<span class="pl-k">=</span>b<span class="pl-k">||</span><span class="pl-k">new</span> <span class="pl-en">FileReader</span>;<span class="pl-s3">a</span>.<span class="pl-en">onload</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">a</span>){d(<span class="pl-k">new</span> <span class="pl-en">y</span>(a.<span class="pl-sc">target</span>.result))};a.readAsBinaryString(g)}}})(<span class="pl-v">this</span>);(<span class="pl-st">function</span>(<span class="pl-vpf">h</span>){<span class="pl-s">var</span> g<span class="pl-k">=</span>h.p<span class="pl-k">=</span>{},b<span class="pl-k">=</span>{},c<span class="pl-k">=</span>[<span class="pl-c1">0</span>,<span class="pl-c1">7</span>];<span class="pl-s3">g</span>.<span class="pl-en">t</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">d</span>){<span class="pl-k">delete</span> b[d]};<span class="pl-s3">g</span>.<span class="pl-en">s</span><span class="pl-k">=</span><span class="pl-st">function</span>(){b<span class="pl-k">=</span>{}};<span class="pl-s3">g</span>.<span class="pl-en">B</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">d</span>,<span class="pl-vpf">a</span>,<span class="pl-vpf">f</span>){f<span class="pl-k">=</span>f<span class="pl-k">||</span>{};(f.dataReader<span class="pl-k">||</span>C)(d,<span class="pl-st">function</span>(<span class="pl-vpf">g</span>){g.f(c,<span class="pl-st">function</span>(){<span class="pl-s">var</span> c<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>ftypM4A<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>g.c(<span class="pl-c1">4</span>,<span class="pl-c1">7</span>)<span class="pl-k">?</span>ID4<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>ID3<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>g.c(<span class="pl-c1">0</span>,<span class="pl-c1">3</span>)<span class="pl-k">?</span>ID3v2<span class="pl-k">:</span>ID3v1;c.m(g,<span class="pl-st">function</span>(){<span class="pl-s">var</span> e<span class="pl-k">=</span>f.<span class="pl-sc">tags</span>,h<span class="pl-k">=</span>c.n(g,e),e<span class="pl-k">=</span>b[d]<span class="pl-k">||</span>{},m;<span class="pl-k">for</span>(m <span class="pl-k">in</span> h)h.hasOwnProperty(m)<span class="pl-k">&amp;&amp;</span>(e[m]<span class="pl-k">=</span>h[m]);b[d]<span class="pl-k">=</span>e;a<span class="pl-k">&amp;&amp;</span>a()})})},f.<span class="pl-s3">onError</span>)};<span class="pl-s3">g</span>.<span class="pl-en">v</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">d</span>){<span class="pl-k">if</span>(<span class="pl-k">!</span>b[d])<span class="pl-k">return</span> <span class="pl-c1">null</span>;<span class="pl-s">var</span> a<span class="pl-k">=</span>{},c;<span class="pl-k">for</span>(c <span class="pl-k">in</span> b[d])b[d].hasOwnProperty(c)<span class="pl-k">&amp;&amp;</span>(a[c]<span class="pl-k">=</span>b[d][c]);<span class="pl-k">return</span> a};<span class="pl-s3">g</span>.<span class="pl-en">A</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">d</span>,<span class="pl-vpf">a</span>){<span class="pl-k">return</span> b[d]<span class="pl-k">?</span>b[d][a]<span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">null};h.ID3=h.p;g.loadTags=g.B;g.getAllTags=g.v;g.getTag=g.A;g.clearTags=g.t;g.clearAll=g.s})(this);(function(h){var g=h.q={},b=&quot;Blues;Classic Rock;Country;Dance;Disco;Funk;Grunge;Hip-Hop;Jazz;Metal;New Age;Oldies;Other;Pop;R&amp;B;Rap;Reggae;Rock;Techno;Industrial;Alternative;Ska;Death Metal;Pranks;Soundtrack;Euro-Techno;Ambient;Trip-Hop;Vocal;Jazz+Funk;Fusion;Trance;Classical;Instrumental;Acid;House;Game;Sound Clip;Gospel;Noise;AlternRock;Bass;Soul;Punk;Space;Meditative;Instrumental Pop;Instrumental Rock;Ethnic;Gothic;Darkwave;Techno-Industrial;Electronic;Pop-Folk;Eurodance;Dream;Southern Rock;Comedy;Cult;Gangsta;Top 40;Christian Rap;Pop/Funk;Jungle;Native American;Cabaret;New Wave;Psychadelic;Rave;Showtunes;Trailer;Lo-Fi;Tribal;Acid Punk;Acid Jazz;Polka;Retro;Musical;Rock &amp; Roll;Hard Rock;Folk;Folk-Rock;National Folk;Swing;Fast Fusion;Bebob;Latin;Revival;Celtic;Bluegrass;Avantgarde;Gothic Rock;Progressive Rock;Psychedelic Rock;Symphonic Rock;Slow Rock;Big Band;Chorus;Easy Listening;Acoustic;Humour;Speech;Chanson;Opera;Chamber Music;Sonata;Symphony;Booty Bass;Primus;Porn Groove;Satire;Slow Jam;Club;Tango;Samba;Folklore;Ballad;Power Ballad;Rhythmic Soul;Freestyle;Duet;Punk Rock;Drum Solo;Acapella;Euro-House;Dance Hall&quot;.split(&quot;;&quot;);</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line"><span class="pl-s3">g</span>.<span class="pl-en">m</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">b</span>,<span class="pl-vpf">d</span>){<span class="pl-s">var</span> a<span class="pl-k">=</span>b.h();b.f([a<span class="pl-k">-</span><span class="pl-c1">128</span><span class="pl-k">-</span><span class="pl-c1">1</span>,a],d)};<span class="pl-s3">g</span>.<span class="pl-en">n</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">c</span>){<span class="pl-s">var</span> d<span class="pl-k">=</span>c.h()<span class="pl-k">-</span><span class="pl-c1">128</span>;<span class="pl-k">if</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>TAG<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>c.c(d,<span class="pl-c1">3</span>)){<span class="pl-s">var</span> a<span class="pl-k">=</span>c.c(d<span class="pl-k">+</span><span class="pl-c1">3</span>,<span class="pl-c1">30</span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\0</span><span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>),f<span class="pl-k">=</span>c.c(d<span class="pl-k">+</span><span class="pl-c1">33</span>,<span class="pl-c1">30</span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\0</span><span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>),g<span class="pl-k">=</span>c.c(d<span class="pl-k">+</span><span class="pl-c1">63</span>,<span class="pl-c1">30</span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\0</span><span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>),l<span class="pl-k">=</span>c.c(d<span class="pl-k">+</span><span class="pl-c1">93</span>,<span class="pl-c1">4</span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\0</span><span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);<span class="pl-k">if</span>(<span class="pl-c1">0</span><span class="pl-k">==</span>c.a(d<span class="pl-k">+</span><span class="pl-c1">97</span><span class="pl-k">+</span><span class="pl-c1">28</span>))<span class="pl-s">var</span> e<span class="pl-k">=</span>c.c(d<span class="pl-k">+</span><span class="pl-c1">97</span>,<span class="pl-c1">28</span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\0</span><span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>),h<span class="pl-k">=</span>c.a(d<span class="pl-k">+</span><span class="pl-c1">97</span><span class="pl-k">+</span><span class="pl-c1">29</span>);<span class="pl-k">else</span> e<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,h<span class="pl-k">=</span><span class="pl-c1">0</span>;c<span class="pl-k">=</span>c.a(d<span class="pl-k">+</span><span class="pl-c1">97</span><span class="pl-k">+</span><span class="pl-c1">30</span>);<span class="pl-k">return</span>{version<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>1.1<span class="pl-pds">&quot;</span></span>,title<span class="pl-k">:</span>a,artist<span class="pl-k">:</span>f,album<span class="pl-k">:</span>g,year<span class="pl-k">:</span>l,comment<span class="pl-k">:</span>e,track<span class="pl-k">:</span>h,genre<span class="pl-k">:</span><span class="pl-c1">255</span><span class="pl-k">&gt;</span>c<span class="pl-k">?</span>b[c]<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>}}<span class="pl-k">return</span>{}};h.ID3v1<span class="pl-k">=</span>h.q})(<span class="pl-v">this</span>);(<span class="pl-st">function</span>(<span class="pl-vpf">h</span>){<span class="pl-st">function</span> <span class="pl-en">g</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>){<span class="pl-s">var</span> d<span class="pl-k">=</span>b.a(a),c<span class="pl-k">=</span>b.a(a<span class="pl-k">+</span><span class="pl-c1">1</span>),e<span class="pl-k">=</span>b.a(a<span class="pl-k">+</span><span class="pl-c1">2</span>);<span class="pl-k">return</span> b.a(a<span class="pl-k">+</span><span class="pl-c1">3</span>)<span class="pl-k">&amp;</span><span class="pl-c1">127</span>|(e<span class="pl-k">&amp;</span><span class="pl-c1">127</span>)<span class="pl-k">&lt;&lt;</span><span class="pl-c1">7</span>|(c<span class="pl-k">&amp;</span><span class="pl-c1">127</span>)<span class="pl-k">&lt;&lt;</span><span class="pl-c1">14</span>|(d<span class="pl-k">&amp;</span><span class="pl-c1">127</span>)<span class="pl-k">&lt;&lt;</span><span class="pl-c1">21</span>}<span class="pl-s">var</span> b<span class="pl-k">=</span>h.D<span class="pl-k">=</span>{};b.b<span class="pl-k">=</span>{};b.<span class="pl-sc">frames</span><span class="pl-k">=</span>{BUF<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Recommended buffer size<span class="pl-pds">&quot;</span></span>,CNT<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Play counter<span class="pl-pds">&quot;</span></span>,COM<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Comments<span class="pl-pds">&quot;</span></span>,CRA<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Audio encryption<span class="pl-pds">&quot;</span></span>,CRM<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Encrypted meta frame<span class="pl-pds">&quot;</span></span>,ETC<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Event timing codes<span class="pl-pds">&quot;</span></span>,EQU<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Equalization<span class="pl-pds">&quot;</span></span>,GEO<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>General encapsulated object<span class="pl-pds">&quot;</span></span>,IPL<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Involved people list<span class="pl-pds">&quot;</span></span>,LNK<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Linked information<span class="pl-pds">&quot;</span></span>,MCI<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Music CD Identifier<span class="pl-pds">&quot;</span></span>,MLL<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>MPEG location lookup table<span class="pl-pds">&quot;</span></span>,PIC<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Attached picture<span class="pl-pds">&quot;</span></span>,POP<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Popularimeter<span class="pl-pds">&quot;</span></span>,REV<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Reverb<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">RVA<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Relative volume adjustment<span class="pl-pds">&quot;</span></span>,SLT<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Synchronized lyric/text<span class="pl-pds">&quot;</span></span>,STC<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Synced tempo codes<span class="pl-pds">&quot;</span></span>,TAL<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Album/Movie/Show title<span class="pl-pds">&quot;</span></span>,TBP<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>BPM (Beats Per Minute)<span class="pl-pds">&quot;</span></span>,TCM<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Composer<span class="pl-pds">&quot;</span></span>,TCO<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Content type<span class="pl-pds">&quot;</span></span>,TCR<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Copyright message<span class="pl-pds">&quot;</span></span>,TDA<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Date<span class="pl-pds">&quot;</span></span>,TDY<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Playlist delay<span class="pl-pds">&quot;</span></span>,TEN<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Encoded by<span class="pl-pds">&quot;</span></span>,TFT<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>File type<span class="pl-pds">&quot;</span></span>,TIM<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Time<span class="pl-pds">&quot;</span></span>,TKE<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Initial key<span class="pl-pds">&quot;</span></span>,TLA<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Language(s)<span class="pl-pds">&quot;</span></span>,TLE<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Length<span class="pl-pds">&quot;</span></span>,TMT<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Media type<span class="pl-pds">&quot;</span></span>,TOA<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Original artist(s)/performer(s)<span class="pl-pds">&quot;</span></span>,TOF<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Original filename<span class="pl-pds">&quot;</span></span>,TOL<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Original Lyricist(s)/text writer(s)<span class="pl-pds">&quot;</span></span>,TOR<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Original release year<span class="pl-pds">&quot;</span></span>,TOT<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Original album/Movie/Show title<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">TP1<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Lead artist(s)/Lead performer(s)/Soloist(s)/Performing group<span class="pl-pds">&quot;</span></span>,TP2<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Band/Orchestra/Accompaniment<span class="pl-pds">&quot;</span></span>,TP3<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Conductor/Performer refinement<span class="pl-pds">&quot;</span></span>,TP4<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Interpreted, remixed, or otherwise modified by<span class="pl-pds">&quot;</span></span>,TPA<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Part of a set<span class="pl-pds">&quot;</span></span>,TPB<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Publisher<span class="pl-pds">&quot;</span></span>,TRC<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>ISRC (International Standard Recording Code)<span class="pl-pds">&quot;</span></span>,TRD<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Recording dates<span class="pl-pds">&quot;</span></span>,TRK<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Track number/Position in set<span class="pl-pds">&quot;</span></span>,TSI<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Size<span class="pl-pds">&quot;</span></span>,TSS<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Software/hardware and settings used for encoding<span class="pl-pds">&quot;</span></span>,TT1<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Content group description<span class="pl-pds">&quot;</span></span>,TT2<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Title/Songname/Content description<span class="pl-pds">&quot;</span></span>,TT3<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Subtitle/Description refinement<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">TXT<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Lyricist/text writer<span class="pl-pds">&quot;</span></span>,TXX<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>User defined text information frame<span class="pl-pds">&quot;</span></span>,TYE<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Year<span class="pl-pds">&quot;</span></span>,UFI<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Unique file identifier<span class="pl-pds">&quot;</span></span>,ULT<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Unsychronized lyric/text transcription<span class="pl-pds">&quot;</span></span>,WAF<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Official audio file webpage<span class="pl-pds">&quot;</span></span>,WAR<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Official artist/performer webpage<span class="pl-pds">&quot;</span></span>,WAS<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Official audio source webpage<span class="pl-pds">&quot;</span></span>,WCM<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Commercial information<span class="pl-pds">&quot;</span></span>,WCP<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Copyright/Legal information<span class="pl-pds">&quot;</span></span>,WPB<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Publishers official webpage<span class="pl-pds">&quot;</span></span>,WXX<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>User defined URL link frame<span class="pl-pds">&quot;</span></span>,AENC<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Audio encryption<span class="pl-pds">&quot;</span></span>,APIC<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Attached picture<span class="pl-pds">&quot;</span></span>,COMM<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Comments<span class="pl-pds">&quot;</span></span>,COMR<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Commercial frame<span class="pl-pds">&quot;</span></span>,ENCR<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Encryption method registration<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">EQUA<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Equalization<span class="pl-pds">&quot;</span></span>,ETCO<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Event timing codes<span class="pl-pds">&quot;</span></span>,GEOB<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>General encapsulated object<span class="pl-pds">&quot;</span></span>,GRID<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Group identification registration<span class="pl-pds">&quot;</span></span>,IPLS<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Involved people list<span class="pl-pds">&quot;</span></span>,LINK<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Linked information<span class="pl-pds">&quot;</span></span>,MCDI<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Music CD identifier<span class="pl-pds">&quot;</span></span>,MLLT<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>MPEG location lookup table<span class="pl-pds">&quot;</span></span>,OWNE<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Ownership frame<span class="pl-pds">&quot;</span></span>,PRIV<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Private frame<span class="pl-pds">&quot;</span></span>,PCNT<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Play counter<span class="pl-pds">&quot;</span></span>,POPM<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Popularimeter<span class="pl-pds">&quot;</span></span>,POSS<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Position synchronisation frame<span class="pl-pds">&quot;</span></span>,RBUF<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Recommended buffer size<span class="pl-pds">&quot;</span></span>,RVAD<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Relative volume adjustment<span class="pl-pds">&quot;</span></span>,RVRB<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Reverb<span class="pl-pds">&quot;</span></span>,SYLT<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Synchronized lyric/text<span class="pl-pds">&quot;</span></span>,SYTC<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Synchronized tempo codes<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">TALB<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Album/Movie/Show title<span class="pl-pds">&quot;</span></span>,TBPM<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>BPM (beats per minute)<span class="pl-pds">&quot;</span></span>,TCOM<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Composer<span class="pl-pds">&quot;</span></span>,TCON<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Content type<span class="pl-pds">&quot;</span></span>,TCOP<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Copyright message<span class="pl-pds">&quot;</span></span>,TDAT<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Date<span class="pl-pds">&quot;</span></span>,TDLY<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Playlist delay<span class="pl-pds">&quot;</span></span>,TENC<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Encoded by<span class="pl-pds">&quot;</span></span>,TEXT<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Lyricist/Text writer<span class="pl-pds">&quot;</span></span>,TFLT<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>File type<span class="pl-pds">&quot;</span></span>,TIME<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Time<span class="pl-pds">&quot;</span></span>,TIT1<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Content group description<span class="pl-pds">&quot;</span></span>,TIT2<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Title/songname/content description<span class="pl-pds">&quot;</span></span>,TIT3<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Subtitle/Description refinement<span class="pl-pds">&quot;</span></span>,TKEY<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Initial key<span class="pl-pds">&quot;</span></span>,TLAN<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Language(s)<span class="pl-pds">&quot;</span></span>,TLEN<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Length<span class="pl-pds">&quot;</span></span>,TMED<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Media type<span class="pl-pds">&quot;</span></span>,TOAL<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Original album/movie/show title<span class="pl-pds">&quot;</span></span>,TOFN<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Original filename<span class="pl-pds">&quot;</span></span>,TOLY<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Original lyricist(s)/text writer(s)<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">TOPE<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Original artist(s)/performer(s)<span class="pl-pds">&quot;</span></span>,TORY<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Original release year<span class="pl-pds">&quot;</span></span>,TOWN<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>File owner/licensee<span class="pl-pds">&quot;</span></span>,TPE1<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Lead performer(s)/Soloist(s)<span class="pl-pds">&quot;</span></span>,TPE2<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Band/orchestra/accompaniment<span class="pl-pds">&quot;</span></span>,TPE3<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Conductor/performer refinement<span class="pl-pds">&quot;</span></span>,TPE4<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Interpreted, remixed, or otherwise modified by<span class="pl-pds">&quot;</span></span>,TPOS<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Part of a set<span class="pl-pds">&quot;</span></span>,TPUB<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Publisher<span class="pl-pds">&quot;</span></span>,TRCK<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Track number/Position in set<span class="pl-pds">&quot;</span></span>,TRDA<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Recording dates<span class="pl-pds">&quot;</span></span>,TRSN<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Internet radio station name<span class="pl-pds">&quot;</span></span>,TRSO<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Internet radio station owner<span class="pl-pds">&quot;</span></span>,TSIZ<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Size<span class="pl-pds">&quot;</span></span>,TSRC<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>ISRC (international standard recording code)<span class="pl-pds">&quot;</span></span>,TSSE<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Software/Hardware and settings used for encoding<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">TYER<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Year<span class="pl-pds">&quot;</span></span>,TXXX<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>User defined text information frame<span class="pl-pds">&quot;</span></span>,UFID<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Unique file identifier<span class="pl-pds">&quot;</span></span>,USER<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Terms of use<span class="pl-pds">&quot;</span></span>,USLT<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Unsychronized lyric/text transcription<span class="pl-pds">&quot;</span></span>,WCOM<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Commercial information<span class="pl-pds">&quot;</span></span>,WCOP<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Copyright/Legal information<span class="pl-pds">&quot;</span></span>,WOAF<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Official audio file webpage<span class="pl-pds">&quot;</span></span>,WOAR<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Official artist/performer webpage<span class="pl-pds">&quot;</span></span>,WOAS<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Official audio source webpage<span class="pl-pds">&quot;</span></span>,WORS<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Official internet radio station homepage<span class="pl-pds">&quot;</span></span>,WPAY<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Payment<span class="pl-pds">&quot;</span></span>,WPUB<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Publishers official webpage<span class="pl-pds">&quot;</span></span>,WXXX<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>User defined URL link frame<span class="pl-pds">&quot;</span></span>};<span class="pl-s">var</span> c<span class="pl-k">=</span>{title<span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>TIT2<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>TT2<span class="pl-pds">&quot;</span></span>],artist<span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>TPE1<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line"><span class="pl-s1"><span class="pl-pds">&quot;</span>TP1<span class="pl-pds">&quot;</span></span>],album<span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>TALB<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>TAL<span class="pl-pds">&quot;</span></span>],year<span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>TYER<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>TYE<span class="pl-pds">&quot;</span></span>],comment<span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>COMM<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>COM<span class="pl-pds">&quot;</span></span>],track<span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>TRCK<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>TRK<span class="pl-pds">&quot;</span></span>],genre<span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>TCON<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>TCO<span class="pl-pds">&quot;</span></span>],picture<span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>APIC<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>PIC<span class="pl-pds">&quot;</span></span>],lyrics<span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>USLT<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>ULT<span class="pl-pds">&quot;</span></span>]},d<span class="pl-k">=</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>title<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>artist<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>album<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>track<span class="pl-pds">&quot;</span></span>];<span class="pl-s3">b</span>.<span class="pl-en">m</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>){a.f([<span class="pl-c1">0</span>,g(<span class="pl-c1">6</span>,a)],b)};<span class="pl-s3">b</span>.<span class="pl-en">n</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">f</span>){<span class="pl-s">var</span> h<span class="pl-k">=</span><span class="pl-c1">0</span>,l<span class="pl-k">=</span>a.a(h<span class="pl-k">+</span><span class="pl-c1">3</span>);<span class="pl-k">if</span>(<span class="pl-c1">4</span><span class="pl-k">&lt;</span>l)<span class="pl-k">return</span>{version<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>&gt;2.4<span class="pl-pds">&quot;</span></span>};<span class="pl-s">var</span> e<span class="pl-k">=</span>a.a(h<span class="pl-k">+</span><span class="pl-c1">4</span>),t<span class="pl-k">=</span>a.d(h<span class="pl-k">+</span><span class="pl-c1">5</span>,<span class="pl-c1">7</span>),m<span class="pl-k">=</span>a.d(h<span class="pl-k">+</span><span class="pl-c1">5</span>,<span class="pl-c1">6</span>),u<span class="pl-k">=</span>a.d(h<span class="pl-k">+</span><span class="pl-c1">5</span>,<span class="pl-c1">5</span>),k<span class="pl-k">=</span>g(h<span class="pl-k">+</span><span class="pl-c1">6</span>,a),h<span class="pl-k">=</span>h<span class="pl-k">+</span><span class="pl-c1">10</span>;<span class="pl-k">if</span>(m)<span class="pl-s">var</span> r<span class="pl-k">=</span>a.i(h),h<span class="pl-k">=</span>h<span class="pl-k">+</span>(r<span class="pl-k">+</span><span class="pl-c1">4</span>);<span class="pl-s">var</span> l<span class="pl-k">=</span>{version<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>2.<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>l<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>e,major<span class="pl-k">:</span>l,revision<span class="pl-k">:</span>e,flags<span class="pl-k">:</span>{unsynchronisation<span class="pl-k">:</span>t,extended_header<span class="pl-k">:</span>m,experimental_indicator<span class="pl-k">:</span>u},</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">size<span class="pl-k">:</span>k},n;<span class="pl-k">if</span>(t)n<span class="pl-k">=</span>{};<span class="pl-k">else</span>{<span class="pl-k">for</span>(<span class="pl-s">var</span> k<span class="pl-k">=</span>k<span class="pl-k">-</span><span class="pl-c1">10</span>,t<span class="pl-k">=</span>a,e<span class="pl-k">=</span>f,m<span class="pl-k">=</span>{},u<span class="pl-k">=</span>l.major,r<span class="pl-k">=</span>[],q<span class="pl-k">=</span><span class="pl-c1">0</span>,p;p<span class="pl-k">=</span>(e<span class="pl-k">||</span>d)[q];q<span class="pl-k">++</span>)r<span class="pl-k">=</span>r.<span class="pl-s3">concat</span>(c[p]<span class="pl-k">||</span>[p]);<span class="pl-k">for</span>(e<span class="pl-k">=</span>r;h<span class="pl-k">&lt;</span>k;){r<span class="pl-k">=</span><span class="pl-c1">null</span>;q<span class="pl-k">=</span>t;p<span class="pl-k">=</span>h;<span class="pl-s">var</span> x<span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-k">switch</span>(u){<span class="pl-k">case</span> <span class="pl-c1">2</span><span class="pl-k">:</span>n<span class="pl-k">=</span>q.c(p,<span class="pl-c1">3</span>);<span class="pl-s">var</span> s<span class="pl-k">=</span>q.o(p<span class="pl-k">+</span><span class="pl-c1">3</span>),w<span class="pl-k">=</span><span class="pl-c1">6</span>;<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-c1">3</span><span class="pl-k">:</span>n<span class="pl-k">=</span>q.c(p,<span class="pl-c1">4</span>);s<span class="pl-k">=</span>q.i(p<span class="pl-k">+</span><span class="pl-c1">4</span>);w<span class="pl-k">=</span><span class="pl-c1">10</span>;<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-c1">4</span><span class="pl-k">:</span>n<span class="pl-k">=</span>q.c(p,<span class="pl-c1">4</span>),s<span class="pl-k">=</span>g(p<span class="pl-k">+</span><span class="pl-c1">4</span>,q),w<span class="pl-k">=</span><span class="pl-c1">10</span>}<span class="pl-k">if</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>n)<span class="pl-k">break</span>;h<span class="pl-k">+=</span>w<span class="pl-k">+</span>s;<span class="pl-c1">0</span><span class="pl-k">&gt;</span>e.<span class="pl-s3">indexOf</span>(n)<span class="pl-k">||</span>(<span class="pl-c1">2</span><span class="pl-k">&lt;</span>u<span class="pl-k">&amp;&amp;</span>(x<span class="pl-k">=</span>{message<span class="pl-k">:</span>{P<span class="pl-k">:</span>q.d(p<span class="pl-k">+</span><span class="pl-c1">8</span>,<span class="pl-c1">6</span>),I<span class="pl-k">:</span>q.d(p<span class="pl-k">+</span><span class="pl-c1">8</span>,<span class="pl-c1">5</span>),M<span class="pl-k">:</span>q.d(p<span class="pl-k">+</span><span class="pl-c1">8</span>,<span class="pl-c1">4</span>)},k<span class="pl-k">:</span>{K<span class="pl-k">:</span>q.d(p<span class="pl-k">+</span><span class="pl-c1">8</span><span class="pl-k">+</span><span class="pl-c1">1</span>,<span class="pl-c1">7</span>),F<span class="pl-k">:</span>q.d(p<span class="pl-k">+</span><span class="pl-c1">8</span><span class="pl-k">+</span><span class="pl-c1">1</span>,<span class="pl-c1">3</span>),H<span class="pl-k">:</span>q.d(p<span class="pl-k">+</span><span class="pl-c1">8</span><span class="pl-k">+</span><span class="pl-c1">1</span>,<span class="pl-c1">2</span>),C<span class="pl-k">:</span>q.d(p<span class="pl-k">+</span><span class="pl-c1">8</span><span class="pl-k">+</span><span class="pl-c1">1</span>,<span class="pl-c1">1</span>),u<span class="pl-k">:</span>q.d(p<span class="pl-k">+</span><span class="pl-c1">8</span><span class="pl-k">+</span><span class="pl-c1">1</span>,<span class="pl-c1">0</span>)}}),p<span class="pl-k">+=</span>w,x<span class="pl-k">&amp;&amp;</span>x.k.u<span class="pl-k">&amp;&amp;</span>(g(p,q),p<span class="pl-k">+=</span><span class="pl-c1">4</span>,s<span class="pl-k">-=</span><span class="pl-c1">4</span>),x<span class="pl-k">&amp;&amp;</span>x.k.C<span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">(n <span class="pl-k">in</span> b.b<span class="pl-k">?</span>r<span class="pl-k">=</span>b.b[n]<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>T<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>n[<span class="pl-c1">0</span>]<span class="pl-k">&amp;&amp;</span>(r<span class="pl-k">=</span>b.b[<span class="pl-s1"><span class="pl-pds">&quot;</span>T*<span class="pl-pds">&quot;</span></span>]),r<span class="pl-k">=</span>r<span class="pl-k">?</span>r(p,s,q,x)<span class="pl-k">:void</span> <span class="pl-c1">0</span>,r<span class="pl-k">=</span>{id<span class="pl-k">:</span>n,size<span class="pl-k">:</span>s,description<span class="pl-k">:</span>n <span class="pl-k">in</span> b.<span class="pl-sc">frames</span><span class="pl-k">?</span>b.<span class="pl-sc">frames</span>[n]<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Unknown<span class="pl-pds">&quot;</span></span>,data<span class="pl-k">:</span>r},n <span class="pl-k">in</span> m<span class="pl-k">?</span>(m[n].<span class="pl-sc">id</span><span class="pl-k">&amp;&amp;</span>(m[n]<span class="pl-k">=</span>[m[n]]),m[n].<span class="pl-s3">push</span>(r))<span class="pl-k">:</span>m[n]<span class="pl-k">=</span>r))}n<span class="pl-k">=</span>m}<span class="pl-k">for</span>(<span class="pl-s">var</span> z <span class="pl-k">in</span> c)<span class="pl-k">if</span>(c.hasOwnProperty(z)){a<span class="pl-k">:</span>{s<span class="pl-k">=</span>c[z];<span class="pl-s1"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span><span class="pl-k">==typeof</span> s<span class="pl-k">&amp;&amp;</span>(s<span class="pl-k">=</span>[s]);w<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(h<span class="pl-k">=void</span> <span class="pl-c1">0</span>;h<span class="pl-k">=</span>s[w];w<span class="pl-k">++</span>)<span class="pl-k">if</span>(h <span class="pl-k">in</span> n){a<span class="pl-k">=</span>n[h].<span class="pl-sc">data</span>;<span class="pl-k">break</span> a}a<span class="pl-k">=void</span> <span class="pl-c1">0</span>}a<span class="pl-k">&amp;&amp;</span>(l[z]<span class="pl-k">=</span>a)}<span class="pl-k">for</span>(<span class="pl-s">var</span> A <span class="pl-k">in</span> n)n.hasOwnProperty(A)<span class="pl-k">&amp;&amp;</span>(l[A]<span class="pl-k">=</span>n[A]);<span class="pl-k">return</span> l};h.ID3v2<span class="pl-k">=</span>b})(<span class="pl-v">this</span>);(<span class="pl-st">function</span>(){<span class="pl-st">function</span> <span class="pl-en">h</span>(<span class="pl-vpf">b</span>){<span class="pl-s">var</span> c;<span class="pl-k">switch</span>(b){<span class="pl-k">case</span> <span class="pl-c1">0</span><span class="pl-k">:</span>c<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>iso-8859-1<span class="pl-pds">&quot;</span></span>;<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-c1">1</span><span class="pl-k">:</span>c<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>utf-16<span class="pl-pds">&quot;</span></span>;<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-c1">2</span><span class="pl-k">:</span>c<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>utf-16be<span class="pl-pds">&quot;</span></span>;<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-c1">3</span><span class="pl-k">:</span>c<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>utf-8<span class="pl-pds">&quot;</span></span>}<span class="pl-k">return</span> c}<span class="pl-s">var</span> g<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>32x32 pixels &#39;file icon&#39; (PNG only);Other file icon;Cover (front);Cover (back);Leaflet page;Media (e.g. lable side of CD);Lead artist/lead performer/soloist;Artist/performer;Conductor;Band/Orchestra;Composer;Lyricist/text writer;Recording Location;During recording;During performance;Movie/video screen capture;A bright coloured fish;Illustration;Band/artist logotype;Publisher/Studio logotype<span class="pl-pds">&quot;</span></span>.<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line"><span class="pl-s3">ID3v2.b</span>.<span class="pl-en">APIC</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">b</span>,<span class="pl-vpf">c</span>,<span class="pl-vpf">d</span>,<span class="pl-vpf">a</span>,<span class="pl-vpf">f</span>){f<span class="pl-k">=</span>f<span class="pl-k">||</span><span class="pl-s1"><span class="pl-pds">&quot;</span>3<span class="pl-pds">&quot;</span></span>;a<span class="pl-k">=</span>b;<span class="pl-s">var</span> v<span class="pl-k">=</span>h(d.a(b));<span class="pl-k">switch</span>(f){<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>2<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s">var</span> l<span class="pl-k">=</span>d.c(b<span class="pl-k">+</span><span class="pl-c1">1</span>,<span class="pl-c1">3</span>);b<span class="pl-k">+=</span><span class="pl-c1">4</span>;<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>3<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>4<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>l<span class="pl-k">=</span>d.e(b<span class="pl-k">+</span><span class="pl-c1">1</span>,c<span class="pl-k">-</span>(b<span class="pl-k">-</span>a),<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>),b<span class="pl-k">+=</span><span class="pl-c1">1</span><span class="pl-k">+</span>l.g}f<span class="pl-k">=</span>d.a(b,<span class="pl-c1">1</span>);f<span class="pl-k">=</span>g[f];v<span class="pl-k">=</span>d.e(b<span class="pl-k">+</span><span class="pl-c1">1</span>,c<span class="pl-k">-</span>(b<span class="pl-k">-</span>a),v);b<span class="pl-k">+=</span><span class="pl-c1">1</span><span class="pl-k">+</span>v.g;<span class="pl-k">return</span>{format<span class="pl-k">:</span>l.<span class="pl-s3">toString</span>(),type<span class="pl-k">:</span>f,description<span class="pl-k">:</span>v.<span class="pl-s3">toString</span>(),data<span class="pl-k">:</span>d.l(b,a<span class="pl-k">+</span>c<span class="pl-k">-</span>b)}};<span class="pl-s3">ID3v2.b</span>.<span class="pl-en">COMM</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">b</span>,<span class="pl-vpf">c</span>,<span class="pl-vpf">d</span>){<span class="pl-s">var</span> a<span class="pl-k">=</span>b,f<span class="pl-k">=</span>h(d.a(b)),g<span class="pl-k">=</span>d.c(b<span class="pl-k">+</span><span class="pl-c1">1</span>,<span class="pl-c1">3</span>),l<span class="pl-k">=</span>d.e(b<span class="pl-k">+</span><span class="pl-c1">4</span>,c<span class="pl-k">-</span><span class="pl-c1">4</span>,f);b<span class="pl-k">+=</span><span class="pl-c1">4</span><span class="pl-k">+</span>l.g;b<span class="pl-k">=</span>d.e(b,a<span class="pl-k">+</span>c<span class="pl-k">-</span>b,f);<span class="pl-k">return</span>{language<span class="pl-k">:</span>g,O<span class="pl-k">:</span>l.<span class="pl-s3">toString</span>(),text<span class="pl-k">:</span>b.<span class="pl-s3">toString</span>()}};ID3v2.b.COM<span class="pl-k">=</span>ID3v2.b.COMM;<span class="pl-s3">ID3v2.b</span>.<span class="pl-en">PIC</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">b</span>,<span class="pl-vpf">c</span>,<span class="pl-vpf">d</span>,<span class="pl-vpf">a</span>){<span class="pl-k">return</span> ID3v2.b.APIC(b,</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">c,d,a,<span class="pl-s1"><span class="pl-pds">&quot;</span>2<span class="pl-pds">&quot;</span></span>)};<span class="pl-s3">ID3v2.b</span>.<span class="pl-en">PCNT</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">b</span>,<span class="pl-vpf">c</span>,<span class="pl-vpf">d</span>){<span class="pl-k">return</span> d.J(b)};ID3v2.b.CNT<span class="pl-k">=</span>ID3v2.b.PCNT;ID3v2.b[<span class="pl-s1"><span class="pl-pds">&quot;</span>T*<span class="pl-pds">&quot;</span></span>]<span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">b</span>,<span class="pl-vpf">c</span>,<span class="pl-vpf">d</span>){<span class="pl-s">var</span> a<span class="pl-k">=</span>h(d.a(b));<span class="pl-k">return</span> d.e(b<span class="pl-k">+</span><span class="pl-c1">1</span>,c<span class="pl-k">-</span><span class="pl-c1">1</span>,a).<span class="pl-s3">toString</span>()};<span class="pl-s3">ID3v2.b</span>.<span class="pl-en">TCON</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">b</span>,<span class="pl-vpf">c</span>,<span class="pl-vpf">d</span>){<span class="pl-k">return</span> ID3v2.b[<span class="pl-s1"><span class="pl-pds">&quot;</span>T*<span class="pl-pds">&quot;</span></span>].<span class="pl-s3">apply</span>(<span class="pl-v">this</span>,arguments).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\(</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-cce">\)</span><span class="pl-pds">/</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)};ID3v2.b.TCO<span class="pl-k">=</span>ID3v2.b.TCON;<span class="pl-s3">ID3v2.b</span>.<span class="pl-en">USLT</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">b</span>,<span class="pl-vpf">c</span>,<span class="pl-vpf">d</span>){<span class="pl-s">var</span> a<span class="pl-k">=</span>b,f<span class="pl-k">=</span>h(d.a(b)),g<span class="pl-k">=</span>d.c(b<span class="pl-k">+</span><span class="pl-c1">1</span>,<span class="pl-c1">3</span>),l<span class="pl-k">=</span>d.e(b<span class="pl-k">+</span><span class="pl-c1">4</span>,c<span class="pl-k">-</span><span class="pl-c1">4</span>,f);b<span class="pl-k">+=</span><span class="pl-c1">4</span><span class="pl-k">+</span>l.g;b<span class="pl-k">=</span>d.e(b,a<span class="pl-k">+</span>c<span class="pl-k">-</span>b,f);<span class="pl-k">return</span>{language<span class="pl-k">:</span>g,G<span class="pl-k">:</span>l.<span class="pl-s3">toString</span>(),L<span class="pl-k">:</span>b.<span class="pl-s3">toString</span>()}};ID3v2.b.ULT<span class="pl-k">=</span>ID3v2.b.USLT})();(<span class="pl-st">function</span>(<span class="pl-vpf">h</span>){<span class="pl-st">function</span> <span class="pl-en">g</span>(<span class="pl-vpf">b</span>,<span class="pl-vpf">a</span>,<span class="pl-vpf">f</span>,<span class="pl-vpf">h</span>){<span class="pl-s">var</span> l<span class="pl-k">=</span>b.i(a);<span class="pl-k">if</span>(<span class="pl-c1">0</span><span class="pl-k">==</span>l)h();<span class="pl-k">else</span>{<span class="pl-s">var</span> e<span class="pl-k">=</span>b.c(a<span class="pl-k">+</span><span class="pl-c1">4</span>,<span class="pl-c1">4</span>);<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">&lt;</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>moov<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>udta<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>meta<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>ilst<span class="pl-pds">&quot;</span></span>].<span class="pl-s3">indexOf</span>(e)<span class="pl-k">?</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>meta<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>e<span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">+=</span><span class="pl-c1">4</span>),b.f([a<span class="pl-k">+</span><span class="pl-c1">8</span>,a<span class="pl-k">+</span><span class="pl-c1">8</span><span class="pl-k">+</span><span class="pl-c1">8</span>],<span class="pl-st">function</span>(){g(b,a<span class="pl-k">+</span><span class="pl-c1">8</span>,l<span class="pl-k">-</span><span class="pl-c1">8</span>,h)}))<span class="pl-k">:</span>b.f([a<span class="pl-k">+</span>(e <span class="pl-k">in</span> c.j<span class="pl-k">?</span><span class="pl-c1">0</span><span class="pl-k">:</span>l),a<span class="pl-k">+</span>l<span class="pl-k">+</span><span class="pl-c1">8</span>],<span class="pl-st">function</span>(){g(b,a<span class="pl-k">+</span>l,f,h)})}}<span class="pl-st">function</span> <span class="pl-en">b</span>(<span class="pl-vpf">d</span>,<span class="pl-vpf">a</span>,<span class="pl-vpf">f</span>,<span class="pl-vpf">g</span>,<span class="pl-vpf">h</span>){h<span class="pl-k">=void</span> <span class="pl-c1">0</span><span class="pl-k">===</span>h<span class="pl-k">?</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>h<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>  <span class="pl-pds">&quot;</span></span>;<span class="pl-k">for</span>(<span class="pl-s">var</span> e<span class="pl-k">=</span>f;e<span class="pl-k">&lt;</span>f<span class="pl-k">+</span>g;){<span class="pl-s">var</span> t<span class="pl-k">=</span>a.i(e);<span class="pl-k">if</span>(<span class="pl-c1">0</span><span class="pl-k">==</span>t)<span class="pl-k">break</span>;<span class="pl-s">var</span> m<span class="pl-k">=</span>a.c(e<span class="pl-k">+</span><span class="pl-c1">4</span>,<span class="pl-c1">4</span>);<span class="pl-k">if</span>(<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">&lt;</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>moov<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>udta<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>meta<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>ilst<span class="pl-pds">&quot;</span></span>].<span class="pl-s3">indexOf</span>(m)){<span class="pl-s1"><span class="pl-pds">&quot;</span>meta<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>m<span class="pl-k">&amp;&amp;</span>(e<span class="pl-k">+=</span><span class="pl-c1">4</span>);b(d,a,e<span class="pl-k">+</span><span class="pl-c1">8</span>,t<span class="pl-k">-</span><span class="pl-c1">8</span>,h);<span class="pl-k">break</span>}<span class="pl-k">if</span>(c.j[m]){<span class="pl-s">var</span> u<span class="pl-k">=</span>a.o(e<span class="pl-k">+</span><span class="pl-c1">16</span><span class="pl-k">+</span><span class="pl-c1">1</span>),k<span class="pl-k">=</span>c.j[m],u<span class="pl-k">=</span>c.types[u];<span class="pl-k">if</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>trkn<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">m)d[k[<span class="pl-c1">0</span>]]<span class="pl-k">=</span>a.a(e<span class="pl-k">+</span><span class="pl-c1">16</span><span class="pl-k">+</span><span class="pl-c1">11</span>),d.count<span class="pl-k">=</span>a.a(e<span class="pl-k">+</span><span class="pl-c1">16</span><span class="pl-k">+</span><span class="pl-c1">13</span>);<span class="pl-k">else</span>{<span class="pl-s">var</span> m<span class="pl-k">=</span>e<span class="pl-k">+</span><span class="pl-c1">16</span><span class="pl-k">+</span><span class="pl-c1">4</span><span class="pl-k">+</span><span class="pl-c1">4</span>,r<span class="pl-k">=</span>t<span class="pl-k">-</span><span class="pl-c1">16</span><span class="pl-k">-</span><span class="pl-c1">4</span><span class="pl-k">-</span><span class="pl-c1">4</span>,n;<span class="pl-k">switch</span>(u){<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>text<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>n<span class="pl-k">=</span>a.e(m,r,<span class="pl-s1"><span class="pl-pds">&quot;</span>UTF-8<span class="pl-pds">&quot;</span></span>);<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>uint8<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>n<span class="pl-k">=</span>a.w(m);<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>jpeg<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>png<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>n<span class="pl-k">=</span>{k<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>image/<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>u,data<span class="pl-k">:</span>a.l(m,r)}}d[k[<span class="pl-c1">0</span>]]<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>comment<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>k[<span class="pl-c1">0</span>]<span class="pl-k">?</span>{text<span class="pl-k">:</span>n}<span class="pl-k">:</span>n}}e<span class="pl-k">+=</span>t}}<span class="pl-s">var</span> c<span class="pl-k">=</span>h.r<span class="pl-k">=</span>{};c.types<span class="pl-k">=</span>{<span class="pl-c1">0</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>uint8<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">1</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>text<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">13</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>jpeg<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">14</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>png<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">21</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>uint8<span class="pl-pds">&quot;</span></span>};c.j<span class="pl-k">=</span>{<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\u</span>00a9alb<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>album<span class="pl-pds">&quot;</span></span>],<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\u</span>00a9art<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>artist<span class="pl-pds">&quot;</span></span>],<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\u</span>00a9ART<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>artist<span class="pl-pds">&quot;</span></span>],aART<span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>artist<span class="pl-pds">&quot;</span></span>],<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\u</span>00a9day<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>year<span class="pl-pds">&quot;</span></span>],<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\u</span>00a9nam<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>title<span class="pl-pds">&quot;</span></span>],<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\u</span>00a9gen<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>genre<span class="pl-pds">&quot;</span></span>],trkn<span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>track<span class="pl-pds">&quot;</span></span>],<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\u</span>00a9wrt<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>composer<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line"><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\u</span>00a9too<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>encoder<span class="pl-pds">&quot;</span></span>],cprt<span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>copyright<span class="pl-pds">&quot;</span></span>],covr<span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>picture<span class="pl-pds">&quot;</span></span>],<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\u</span>00a9grp<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>grouping<span class="pl-pds">&quot;</span></span>],keyw<span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>keyword<span class="pl-pds">&quot;</span></span>],<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\u</span>00a9lyr<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>lyrics<span class="pl-pds">&quot;</span></span>],<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\u</span>00a9cmt<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>comment<span class="pl-pds">&quot;</span></span>],tmpo<span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>tempo<span class="pl-pds">&quot;</span></span>],cpil<span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>compilation<span class="pl-pds">&quot;</span></span>],disk<span class="pl-k">:</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>disc<span class="pl-pds">&quot;</span></span>]};<span class="pl-s3">c</span>.<span class="pl-en">m</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">b</span>,<span class="pl-vpf">a</span>){b.f([<span class="pl-c1">0</span>,<span class="pl-c1">7</span>],<span class="pl-st">function</span>(){g(b,<span class="pl-c1">0</span>,b.h(),a)})};<span class="pl-s3">c</span>.<span class="pl-en">n</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">c</span>){<span class="pl-s">var</span> a<span class="pl-k">=</span>{};b(a,c,<span class="pl-c1">0</span>,c.h());<span class="pl-k">return</span> a};h.ID4<span class="pl-k">=</span>h.r})(<span class="pl-v">this</span>);</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="http://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="http://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" arial-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.05569s from github-fe123-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-fd3bd2d0c854fa5baa64e8b390de48b1eff4b59e1f38d1b1d695c4b5d835ab04.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-a1920e159e80b32f1e4aef2a69001684142231ede54c42769c782912d9847793.js"></script>
      
      

  </body>
</html>

