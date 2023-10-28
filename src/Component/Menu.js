import React from 'react'

export default function Menu() {
  return (
    <div>
        <div id="top-container">
	
    <div class="container-fluid header-top">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <p>Welcome to the National Institute of Fine Arts</p>
                </div>
                <div class="col-md-4 d-inline-flex header-col-rit">
                    <div class="top-mail">
                        <a href="tel:9555112200" target="_top"><i class="fas fa-phone-alt mr-2"></i>9555112200</a>
                        <a href="tel:9810130552" target="_top"><i class="fas fa-phone-alt mr-2"></i>9810130552</a>
                    </div>
                </div>
                <div class="col-md-4 d-inline-flex header-col-rit">
                    <div class="top-mail">
                        <a href="mailto:admission@nifafinearts.com" target="_top"><i
                                class="fas fa-envelope mr-2"></i>admission@nifafinearts.com</a>
                    </div>
                    <ul class="header-social">
                        <li><a href="https://www.facebook.com/nifafinearts" target="_blank"><i
                                    class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://twitter.com/artsnifa?lang=en" target="_blank"><i
                                    class="fab fa-twitter"></i></a></li>
                        <li><a href="https://instagram.com/nifafinearts?igshid=9ni7d0aogzed" target="_blank"><i
                                    class="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCud0pfiZT-Ph2JX1_tN6rbw" target="_blank"><i
                                    class="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div id="logo">
            <a href="index.html"><img src="images/nifa-new-logo.png" class="img-responsive" /></a>
        </div>
        <div class="responsive">
            <ul>
                <li><img src="images/email.png" /><a
                        href="mailto:admission@nifafinearts.com">admission@nifafinearts.com</a></li>
                <li class="margin-right-0"><img src="images/phone.png" /><a href="#">+91-9555112200/9810130552</a>
                </li>
            </ul>
        </div>
        <div class="responsive-menu">
            <select name="page_name" onChange="location = this.options[this.selectedIndex].value;">
                <option value="./" selected="selected">Home</option>
                <option value="about-us.php">About us</option>
                <option value="facility.php">&nbsp;-Facilities</option>
                <option value="course.php">Courses
                <option value="course.php?id=38">&nbsp;-B.F.A from UGC Recognised University</option>
                <option value="course.php?id=40">&nbsp;-M.A from UGC Recognised University </option>
                <option value="course.php?id=24">&nbsp;-Two years Advance Diploma in Fine Arts</option>
                <option value="course.php?id=29">&nbsp;-One Year Diploma in Fine Arts</option>
                <option value="course.php?id=12">&nbsp;-6 Months Diploma in Fine Arts</option>
                <option value="course.php?id=35">&nbsp;-Entrance Preparation For N.I.D</option>
                <option value="course.php?id=32">&nbsp;-Entrance Preparation for NIFT</option>
                <option value="course.php?id=31">&nbsp;-Animation Sketching</option>
                <option value="course.php?id=16">&nbsp;-Entrance Preparation for B.F.A</option>
                <option value="course.php?id=30">&nbsp;- 1 to 3 Months Certificate Hobby Course </option>
                <option value="course.php?id=25">&nbsp;-Kids Diploma (L-2)</option>
                <option value="course.php?id=39">&nbsp;-Kids Diploma (L-1)</option>
                <option value="course.php?id=36">&nbsp;-Hobby Certificate Course For Kids</option>
                </option>
                <option value="activity-page.php">Activities
                <option value="activity-page.php?id=8">&nbsp;-Workshops</option>
                <option value="activity-page.php?id=2">&nbsp;-Outdoor</option>
                <option value="activity-page.php?id=10">&nbsp;-National Art Seminar & Award Show, 2018</option>
                <option value="activity-page.php?id=4">&nbsp;-Media Coverage</option>
                <option value="activity-page.php?id=9">&nbsp;-Judging Art Events</option>
                <option value="activity-page.php?id=5">&nbsp;-Exhibition</option>
                <option value="activity-page.php?id=7">&nbsp;-Daily Activities</option>
                </option>
                <option value="online-admission.php">Admission</option>
                <option value="students-area.php">Art Gallery
                <option value="students-area.php?id=4">&nbsp;-Work by Kids Level-2</option>
                <option value="students-area.php?id=3">&nbsp;-Work by Kids Level-1</option>
                <option value="students-area.php?id=1">&nbsp;-Sketching</option>
                <option value="students-area.php?id=2">&nbsp;-Paintings done by Students of Level-3</option>
                </option>
                <option value="franchise.php">Franchisee</option>
                <option value="download-mobile-app.php">Online Classes</option>
                <option value="videos.php">Videos</option>
                <option value="payment.php">Pay Fee</option>
                <option value="contact.php">Contact Us</option>
            </select>
        </div>
        <div id="menu">

            <div class="button-menu">
                <ul id="nav">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about-us.html">About</a>
                        <ul>
                            <li><a href="facility.html">Facilities</a></li>
                        </ul>
                    </li>
                    <li><a href="course.html">Courses</a>
                        <ul>
                            <li><a href="course-id-38.html">B.F.A from UGC Recognised University</a></li>
                            <li><a href="course-id-40.html">M.A from UGC Recognised University </a></li>
                            <li><a href="course-id-24.html">Two years Advance Diploma in Fine Arts</a></li>
                            <li><a href="course-id-29.html">One Year Diploma in Fine Arts</a></li>
                            <li><a href="course-id-12.html">6 Months Diploma in Fine Arts</a></li>
                            <li><a href="course-id-35.html">Entrance Preparation For N.I.D</a></li>
                            <li><a href="course-id-32.html">Entrance Preparation for NIFT</a></li>
                            <li><a href="course-id-31.html">Animation Sketching</a></li>
                            <li><a href="course-id-16.html">Entrance Preparation for B.F.A</a></li>
                            <li><a href="course-id-30.html"> 1 to 3 Months Certificate Hobby Course </a></li>
                            <li><a href="course-id-25.html">Kids Diploma (L-2)</a></li>
                            <li><a href="course-id-39.html">Kids Diploma (L-1)</a></li>
                            <li><a href="course-id-36.html">Hobby Certificate Course For Kids</a></li>
                        </ul>
                    </li>
                    <li><a href="activity-page.html">Activities</a>
                        <ul>
                            <li><a href="activity-page-id-8.html">Workshops</a></li>
                            <li><a href="activity-page-id-2.html">Outdoor</a></li>
                            <li><a href="activity-page-id-10.html">National Art Seminar & Award Show, 2018</a></li>
                            <li><a href="activity-page-id-4.html">Media Coverage</a></li>
                            <li><a href="activity-page-id-9.html">Judging Art Events</a></li>
                            <li><a href="activity-page-id-5.html">Exhibition</a></li>
                            <li><a href="activity-page-id-7.html">Daily Activities</a></li>
                        </ul>
                    </li>
                    <li><a href="online-admission.html">Admission</a></li>
                    <li><a href="students-area.html">Art Gallery</a>
                        <ul>
                            <li><a href="students-area-id-4.html">Work by Kids Level-2</a></li>
                            <li><a href="students-area-id-3.html">Work by Kids Level-1</a></li>
                            <li><a href="students-area-id-1.html">Sketching</a></li>
                            <li><a href="students-area-id-2.html">Paintings done by Students of Level-3</a></li>
                        </ul>
                    </li>

                    <li><a href="franchise.html">Franchise</a></li>
                    <li><a href="download-mobile-app.html">Online Classes</a></li>
                    <li><a href="videos.html">Videos</a></li>
                    <li><a href="payment.html">Pay Fee</a></li>
                    <li><a href="contact.html">Contact</a></li>

                </ul>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
