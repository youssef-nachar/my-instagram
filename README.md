<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Instagram</title>
    <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css">
    <link rel="stylesheet" href="./instagram.css">
</head>

<body>
    <nav class="navbar">
     <div class="nav-wrapper">
     <p class="ins-img"> Instagram</p><input type="text" class="search-box" placeholder="Search">
        <div class="nav-items">
            <i class='bx bxs-home icon'></i>
            <i class='bx bxl-messenger icon'></i>
            <i data-bs-toggle="modal" data-bs-target="#post-add-modal" class='bx bx-message-add icon'></i>
            <i class='bx bx-bolt-circle icon'></i>
            <i class='bx bx-heart icon'></i>
            <div class="icon user-profile"></div>
        </div>
    </div>
    </nav>
    <section class="main">
        <div class="wrapper">
            <div class="left-col">
                <div class="status-wrapper">
                    <div class="status-card">
                        <div class="profile-pic"><img src="image1.jpg"></div>
                        <p class="username">payeeel</p>
                    </div>

                    <div class="status-card">
                        <div class="profile-pic"><img src="image1.jpg"></div>
                        <p class="username">nafir_</p>
                    </div>
                    <div class="status-card">
                        <div class="profile-pic"><img src="image1.jpg"></div>
                        <p class="username">hassan__</p>
                    </div>
                    <div class="status-card">
                        <div class="profile-pic"><img src="image1.jpg"></div>
                        <p class="username">payeeel</p>
                    </div>
                     <div class="status-card">
                        <div class="profile-pic"><img src="image2.jpg"></div>
                        <p class="username">may bedstry</p>
                    </div>
                     <div class="status-card">
                        <div class="profile-pic"><img src="image3.jpg"></div>
                        <p class="username">khalid</p>
                    </div>
                     <div class="status-card">
                        <div class="profile-pic"><img src="image1.jpg"></div>
                        <p class="username">walid</p>
                    </div>
                     <div class="status-card">
                        <div class="profile-pic"><img src="image2.jpg"></div>
                        <p class="username">ahmad</p>
                    </div>
                     <div class="status-card">
                        <div class="profile-pic"><img src="image3.jpg"></div>
                        <p class="username">/qara*</p>
                    </div>
                     <div class="status-card">
                        <div class="profile-pic"><img src="image1.jpg"></div>
                        <p class="username">faysal-1</p>
                    </div>
                     <div class="status-card">
                        <div class="profile-pic"><img src="image1.jpg"></div>
                        <p class="username">fadi11......</p>
                    </div>
                </div>
                <div class="all-post">
                    <div class="post">
                        <div class="info">
                            <div class="user">
                                <div class="profile-pic">
                                    <img src="image2.jpg">
                                </div>
                                <p class="username">ovito_uzomaki</p>
                            </div>
                            <div class="dropdown">
                                <a class="dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    <i class="fas fa-ellipsis-h"></i>
                                </a>
                                <ul class="dropdown" aria-labelledby="dropdownMenuLink">
                                    <li><a data-bs-toggle="modal" editLsData="${item.id}" data-bs-target="#edit-modal" class="dropdown-item post_edit" href="#">Edit</a></li>
                                    <li><a class="dropdown-item post_delete" deleteLsData="${item.id}" href="#">Delete</a></li>
                                </ul>

                            </div>
                        </div>
                        <img src="image2.jpg" class="post-image" alt="">
                        <div class="post-content">
                            <div class="reaction-wrapper">
                                    <i class='bx bx-like icon'></i>
                                    <i class='bx bx-message-dots icon'></i>
                                    <i class='bx bx-send icon'></i>
                                    <i class='bx bxs-save icon'></i>
                            </div>
                            <p class="likes">90 likes</p>
                            <p class="description">hey there its ovito</p>
                            <p class="post-time">may 20 2022</p>
                        </div>
                        <div class="comment-wrapper">
                                <i class='bx bx-smile icon'></i>
                                <input type="text" class="comment-box" placeholder="Add a comment">
                                <button class="comment-btn">Post</button>
                        </div>
                    </div>

                </div>
            </div>
            <div class="right-col">
                <div class="profile-card">
                    <div class="profile-pic">
                        <img src="image2.jpg">
                    </div>
                    <div>
                        <p class="username">ovito-uzmatli</p>
                        <p class="sub-text">abdo-lrahman</p>
                    </div>
                    <button class="action-btn">Switch</button>
                </div>
                <p class="sugestion-text">Sugestion for you</p>
                <div class="profile-card">
                    <div class="profile-pic">
                        <img src="image1.jpg">
                    </div>
                    <div>
                        <p class="username">kiko</p>
                        <p class="sub-text">folowed by ___ahmad</p>
                    </div>
                    <button class="action-btn">Follow</button>
                </div>
                 <div class="profile-card">
                    <div class="profile-pic">
                        <img src="image1.jpg">
                    </div>
                    <div>
                        <p class="username">payson</p>
                        <p class="sub-text">new in instagram</p>
                    </div>
                    <button class="action-btn">Follow</button>
                </div>
                 <div class="profile-card">
                    <div class="profile-pic">
                        <img src="image3.jpg">
                    </div>
                    <div>
                        <p class="username">3ajaj</p>
                        <p class="sub-text">folowed by ___ahmad_____</p>
                    </div>
                    <button class="action-btn">Follow</button>
                </div>
                 <div class="profile-card">
                    <div class="profile-pic">
                        <img src="image1.jpg">
                    </div>
                    <div>
                        <p class="username">mostafa</p>
                        <p class="sub-text">folowed by _hassan&&</p>
                    </div>
                    <button class="action-btn">Follow</button>
                </div>
                 <div class="profile-card">
                    <div class="profile-pic">
                        <img src="image2.jpg">
                    </div>
                    <div>
                        <p class="username">kaiful-islam-safin</p>
                        <p class="sub-text">folowed by _al walid </p>
                    </div>
                    <button class="action-btn">Follow</button>
                </div>
            </div>
        </div>
    </section>
<!-- <div class="modal-fade" id="post-add-modal">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-contemt">
            <div class="modal-body">
                <h2>create post</h2>
                <hr>
                <div class="msg"></div>
                <form action="" id="post_add_form"></form>
                <div class="my-3">
                    <label for="">author name</label>
                    <input name="aname" type="text" class="form-control">
                </div>
                <div class="my-3">
                    <label for="">author profile photo</label>
                    <input name="aphoto" type="text" class="form-control">
                </div>
                <div class="my-3">
                    <label for="">post content</label>
                    <input name="pccontent" type="text" class="form-control">
                </div>
                <div class="my-3">
                    <label for="">post photo</label>
                    <input name="pphoto" type="text" class="form-control">
                </div>
                <div class="my-3">
                    <label for="">please mention you post date</label>
                    <input name="pdate" type="date" class="form-control">
                </div>
                <div class="my-3">
                    <input type="submit" class="form-control w-100" value="create post">
                </div>
            </div>
        </div>
    </div>  
</div> -->
<!-- <div class="modal fade" id="edit-modal">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-contemt">
            <div class="modal-header">
                <h2>edit your post</h2>
                <button class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <div class="msg"></div>
                <form action="" id="edit-post">
                    
                </form>
            </div>

        </div>
    </div>
</div> -->
<script src="./instagram.js"></script>
</body>

</html>
