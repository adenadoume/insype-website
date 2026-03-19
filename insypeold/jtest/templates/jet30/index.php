<?php
/**
 * @copyright	Copyright (C) 2007 Compass Design.
 * GPL license
 */
// no direct access
defined( '_JEXEC' ) or die( 'Restricted access' );
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >

<head>

<jdoc:include type="head" />
<link rel="stylesheet" href="templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
</head>
<body>
<!--header start -->
<div id="header">
<div id="menu"><jdoc:include type="modules" name="user3" /></div>

<div class="logo"></div>
<h1>make a huge difference in 1000 days</h1>
<p>congue eu, aliquet eu, dignissim ac, arcu. <span class="txt1">Suspendisse</span> posuere eleifend arcu</p>
</div>
<div id="topwrap">
<div id="toparea">
<jdoc:include type="modules" name="user5" />
<div id="toparea1"><p class="topText">Nam adipiscing massa quis neque uisque iaculis, sapien in pulvinar variusdiam turpis ultricies magna :<span class="smallTxt">scipit nonummy, vulputate vitae, ultricies diam lectus</span></p></div>
</div>
</div>

<!--header end -->
<!--body start -->
<div id="body">
  <?php if($this->countModules('left')) : ?>
  <div id="leftcolumn">
    <div class="inside">
      <jdoc:include type="modules" name="left" style="xhtml" />
    </div>
  </div>
  <?php endif; ?>
<!--left panel end -->
<!--right panel start -->
<div id="right">
<?php echo $contentwidth; ?>
    <div class="inside">
	<jdoc:include type="component" />
    </div><br class="spacer" />
</div>
<!--right panel end -->
<br class="spacer" />
</div>
<!--body end -->
<!--bodyBottom start -->
<div id="bodyBottom">
 <jdoc:include type="modules" name="user6" style="xhtml" />
 <jdoc:include type="modules" name="user7" style="xhtml" />
      <jdoc:include type="modules" name="user9" style="xhtml" />
 <jdoc:include type="modules" name="user8" style="xhtml" />
     
     
</div>
<!--bodyBottom end -->
<!--footer start -->
<div id="footer">
<ul>
	<li><a href="#">Home</a>|</li>
	<li><a href="#">About Us</a>|</li>
	<li><a href="#">Services</a>|</li>
	<li><a href="#">Support</a>|</li>
	<li><a href="#">Communication</a>|</li>
	<li><a href="#">Why Choose Us</a>|</li>
	<li><a href="#">News</a>|</li>
	<li><a href="#">Testimonials</a>|</li>
	<li><a href="#">Contact Us</a></li>
  </ul>
   <p class="copyright">&copy;Jet 30. All rights reserved.</p>
   <a href="#" class="subscribe">Subscribe</a>
   <a href="http://validator.w3.org/check?uri=referer" target="_blank" class="xht"></a>
	<a href="http://jigsaw.w3.org/css-validator/check/referer" target="_blank" class="cs"></a>
	<p class="design">Designed By : <a href="http://www.templateworld.com">Template World</a></p></div>
<!--footer end -->
</body>
</html>
