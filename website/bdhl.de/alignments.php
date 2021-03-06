<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<title>BDHL</title>

<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta name="description" content="benchmarks for quantitative historical linguistics">
<meta name="keywords" content="linguistics, historical linguistics,benchmark,database,phonetic alignment">
<meta NAME="resource-type" CONTENT="linguistics,historical linguistics,benchmark database,phonetic alignment">
<meta name="distribution" CONTENT="global">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

<link rel="icon" href="pics/favicon.png" type="image/png">  
<link rel="stylesheet" href="css/bdhl.css" type="text/css" media="screen" /> 
<link rel="stylesheet" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />
    
<script src="http://code.jquery.com/jquery-latest.js"></script>
<script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>   
<script src="js/concepts.js"></script>
<script src="js/lingulist.js"></script>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>
<script type="text/javascript"
  src="https://c328740.ssl.cf1.rackcdn.com/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
</head>
<body id="home">



<div id="wrapper">
  <div id="header">
  <a href="http://quanthistling.info/bdhl/"><img id="logo" src="pics/favicon.png" width="60px" alt="logo" title="CLiPs" /></a>
  <div id="mainnav">
    <ul id="nav">
    <li>
      <a href="about.php">About</a>
      <ul id="home">
	<li><a href="about.php">About</a></li>
	<li><a href="faq.php">FAQ</a></li>
	<li><a href="contact.php">Contact</a></li>
      </ul>
    </li>
    <li>
      <a href="alignments.php">Alignments</a>
      <ul id="alignments">
	<li><a href="alignments.php">About</a></li>
	<li><a href="pairwise.php">Pairwise</a></li>
	<li><a href="multiple.php">Multiple</a></li>
	<li><a href="align_sources.php">Sources</a></li>
      </ul>
    </li>
    <li>
      <a href="cognates.php">Cognates</a>
      <ul id="cognates">
	<li><a href="cognates.php">About</a></li>
	<li><a href="cognates_browse.php">Browse</a></li>
	<li><a href="cognates_sources.php">Sources</a></li>
      </ul>
    </li>
    <li>
      <a href="proto.php">Reconstruction</a>
      <ul id="proto">
	<li><a href="proto.php">About</a></li>
	<li><a href="proto_sources.php">Sources</a></li>
	<li><a href="proto_browse.php">Browse</a></li>
      </ul>
    </li>
    <li>
      <a href="download.php">Download</a>
      <ul id="download">
	<li><a href="align_download.php">Alignments</a></li>
	<li><a href="cognates_download.php">Cognates</a></li>
	<li><a href="proto_download.php">Reconstructions</a></li>
      </ul>
    </li>
  </ul>
 </div><!--end mainnav-->
 </div><!-- end header -->  
 <div id="subnav">
    <h2><a href="alignments.php">Alignments</a></h2>   
<ul>
    <li><a class="active" href="alignments.php">About</a></li>
    <li><a class="inactive" href="pairwise.php">Pairwise</a></li>
    <li><a class="inactive" href="multiple.php">Multiple</a></li>
    <li><a class="inactive" href="align_sources.php">Sources</a></li>
</ul>

 </div>
 <div id="contentwrapper" class="clearfix">
     <div id="content">    
	 <!-- SIDEBAR alignments -->
<h2>Benchmark Database for Phonetic Alignments (BDPA)</h2>
<br><br>
<div class="sidebar">
<p><b><u>Contents:</u></b></p><br>
<ul>
    <li><a style="color:black;" href="alignments.php#alignments">Alignment Analyses</a></li>
    <li><a style="color:black;" href="alignments.php#introduction">A Benchmark Database for Phonetic Alignments</a></li>
    <li><a style="color:black;" href="alignments.php#formats">Basic Formats for Alignment Analyses</a></li>
    <!--<li><a href="alignments.php#"></a></li>
    <li><a href="alignments.php#"></a></li>-->
</div>

</ul>
<br>

<table>
<tr>
  <td style="background-color:#ffa600;width:100px"><b>Release:</b></td>
  <td> 1.0 </td>
  <td></td>
</tr>
<tr>
  <td style="background-color:#ffa600;width:100px"><b>Date:</b></td>
  <td> ?, ?</td>
  <td></td>
</tr>
<tr>
  <td style="background-color:#ffa600;width:100px"><b>Author:</b></td>
  <td> Johann-Mattis List, Jelena Prokić </td>
  <td></td>
</tr>
</table>
<br><br>
<h3><a style="color:black;" name="alignments">Alignment Analyses</a></h3></br>
<p><i>Alignment analyses</i> are the most common way to compare sequences. Given that phonetic
sequences are the basic comparanda in both historical linguistics and dialectology, it is therefore
straightforward to assume that alignment analyses play a crucial role in both disciplines. Without
alignments, i.e. without the explicit matching of sounds, neither could regular sound
correspondences be detected nor could cognacy between words or genetic relationship between
languages be proven. However, although language comparison is always based on an implicit alignment
of words, it is rarely explicitly visualized or termed as such, and in the rare cases where scholars
explicitly use alignments to visualize correspondence patterns in words, it merely serves
illustrational purposes.</p>
<br>
<h3><a style="color:black;" name="introduction">A Benchmark Database for Phonetic Alignments</a></h3>
<br>
In the last two decades, automatic alignment analyses of phonetic strings have become an
important tool in quantitative language comparison. Phonetic alignment plays a crucial role in the
identification of regular sound correspondences and deeper genealogical relations between and
within language families. Surprisingly, up to today, there are no easily accessible gold standards for
phonetic alignment analyses. Here we present a publicly available benchmark database of
manually edited phonetic alignments which is designed as a platform to test the performance of
automatic alignment algorithms. The database consists of a great variety of alignments drawn from
a number of different sources. The data is arranged in a such way that typical problems
encountered in phonetic alignment analyses (metathesis, splits and mergers of sounds, diversity of
phonetic strings) are represented and can be directly tested.
<br><br>
<ul>
    <li>If you want to download the data, please follow <a href="align_download.php">this link</a>.</li>
    <li>If you want to browse our benchmark for pairwise alignments, please follow <a href="pairwise.php">this link</a>.</li>
    <li>If you want to browse our benchmark for multiple alignments, please follow <a href="multiple.php">this link</a>.</li>
    <li> If you want to check out the sources of the data, please follow <a href="align_sources.php">this link</a>.</li>
</ul>
<!--<p>Along with the recent quantitative turn in linguistics, however, alignment analyses have made their way into historical linguistics and dialectology, and alignment algorithms are frequently used in both fields to quantify similarities and distances between pronunciations, words, and even between entire languages. The new methods do not only speed up the process, but also provide an explicit quantification of similarities and distances between words and morphemes.</p>-->
<br>
<h3><a style="color:black;" name="formats">Basic Formats for Alignment Analyses</a></h3></br>
<p>In order to exchange, edit, and compare phonetic alignments, different formats are used by
PhonAlign. Generally, we distinguish between two formats, one for pairwise alignments (PSA-format)
and one for multiple alignments (MSA-format). Both formats are divided into an input format which
is used to store phonetic sequence pairs or multiple sequences which have not yet been aligned (PSQ
for pairwise and MSQ for multiple alignments), and an output format which is used to display the
respective pairwise (PSA) and multiple (MSA) alignments.</p>
<!--<h4><a class="toc-backref" href="#contents">Pairwise Alignments (PSQ and PSA)</a></h4>-->
<p>The input format for text files containing unaligned sequence pairs is called PSQ-format. Files
in this format should have the extension <tt class="docutils literal">psq</tt>. The first line of a PSQ-file contains information
regarding the dataset. The sequence pairs are given in triplets, with a sequence identifier in the
first line of a triplet (containing the meaning, or orthographical information) and the two
sequences in the second and third line, whereas the first column of each sequence line contains the
name of the taxon and the second column the sequence in IPA format. All triplets are divided by one
empty line. As an example, consider the file <a href="data/harry_potter.psq">harry_potter.psq</a>:</p>

<pre id='vimCodeElement'>
<span class="LineNr"> 1 </span><span class="dataSet">Harry Potter Testset</span>
<span class="LineNr"> 2 </span><span class="seqId">Woldemort in German and Russian</span>
<span class="LineNr"> 3 </span><span class="msaTaxa">German</span>      <span class="dolgoGlides">w</span> <span class="dolgoVowels">a</span> <span class="dolgoLaterals">l</span> d <span class="dolgoVowels">e</span> <span class="dolgoMy">m</span> <span class="dolgoVowels">a</span> <span class="dolgoLaterals">r</span>
<span class="LineNr"> 4 </span><span class="msaTaxa">Russian</span>     <span class="dolgoGlides">v</span> <span class="dolgoLaterals">l</span> <span class="dolgoVowels">a</span> d <span class="dolgoVowels">i</span> <span class="dolgoMy">m</span> <span class="dolgoVowels">i</span> <span class="dolgoLaterals">r</span>
<span class="LineNr"> 5 </span>
<span class="LineNr"> 6 </span><span class="seqId">Woldemort in English and Russian</span>
<span class="LineNr"> 7 </span><span class="msaTaxa">English</span>     <span class="dolgoGlides">w</span> <span class="dolgoVowels">o</span> <span class="dolgoLaterals">l</span> d <span class="dolgoVowels">e</span> <span class="dolgoMy">m</span> <span class="dolgoVowels">o</span> <span class="dolgoLaterals">r</span> t
<span class="LineNr"> 8 </span><span class="msaTaxa">Russian</span>     <span class="dolgoGlides">v</span> <span class="dolgoLaterals">l</span> <span class="dolgoVowels">a</span> d <span class="dolgoVowels">i</span> <span class="dolgoMy">m</span> <span class="dolgoVowels">i</span> <span class="dolgoLaterals">r</span>
<span class="LineNr"> 9 </span>
<span class="LineNr">10 </span><span class="seqId">Woldemort in English and German</span>
<span class="LineNr">11 </span><span class="msaTaxa">English</span>     <span class="dolgoGlides">w</span> <span class="dolgoVowels">o</span> <span class="dolgoLaterals">l</span> d <span class="dolgoVowels">e</span> <span class="dolgoMy">m</span> <span class="dolgoVowels">o</span> <span class="dolgoLaterals">r</span> t
<span class="LineNr">12 </span><span class="msaTaxa">German</span>      <span class="dolgoGlides">w</span> <span class="dolgoVowels">a</span> <span class="dolgoLaterals">l</span> d <span class="dolgoVowels">e</span> <span class="dolgoMy">m</span> <span class="dolgoVowels">a</span> <span class="dolgoLaterals">r</span>
</pre>
<p>The output counterpart of the PSQ-format is the PSA-format. It is a specific format for text files
containing already aligned sequence pairs. Files in this format should have the extension <tt class="docutils literal">psa</tt>. The
first line of a PSA-file contains information regarding the dataset. The sequence pairs are given in
triplets, with a sequence identifier in the first line of a triplet (containing the meaning, or
orthographical information) and the aligned sequences in the second and third line, whith the name
of the taxon in the first column and all aligned segments in the following columns, separated by
tabstops. All triplets are divided by one empty line. As an example, consider the file
<a href="data/harry_potter.psa">harry_potter.psa</a>:</p>

<pre id='vimCodeElement'>
<span class="LineNr"> 1 </span><span class="dataSet">Harry Potter Testset</span>
<span class="LineNr"> 2 </span><span class="seqId">Woldemort in German and Russian</span>
<span class="LineNr"> 3 </span><span class="msaTaxa">German.</span>     <span class="dolgoGlides">w</span>     <span class="dolgoVowels">a</span>     <span class="dolgoLaterals">l</span>     -     d     <span class="dolgoVowels">e</span>     <span class="dolgoMy">m</span>     <span class="dolgoVowels">a</span>     <span class="dolgoLaterals">r</span>
<span class="LineNr"> 4 </span><span class="msaTaxa">Russian</span>     <span class="dolgoGlides">v</span>     -     <span class="dolgoLaterals">l</span>     <span class="dolgoVowels">a</span>     d     <span class="dolgoVowels">i</span>     <span class="dolgoMy">m</span>     <span class="dolgoVowels">i</span>     <span class="dolgoLaterals">r</span>
<span class="LineNr"> 5 </span>
<span class="LineNr"> 6 </span><span class="seqId">Woldemort in English and Russian</span>
<span class="LineNr"> 7 </span><span class="msaTaxa">English</span>     <span class="dolgoGlides">w</span>     <span class="dolgoVowels">o</span>     <span class="dolgoLaterals">l</span>     -     d     <span class="dolgoVowels">e</span>     <span class="dolgoMy">m</span>     <span class="dolgoVowels">o</span>     <span class="dolgoLaterals">r</span>     t
<span class="LineNr"> 8 </span><span class="msaTaxa">Russian</span>     <span class="dolgoGlides">v</span>     -     <span class="dolgoLaterals">l</span>     <span class="dolgoVowels">a</span>     d     <span class="dolgoVowels">i</span>     <span class="dolgoMy">m</span>     <span class="dolgoVowels">i</span>     <span class="dolgoLaterals">r</span>     -
<span class="LineNr"> 9 </span>
<span class="LineNr">10 </span><span class="seqId">Woldemort in English and German</span>
<span class="LineNr">11 </span><span class="msaTaxa">English</span>     <span class="dolgoGlides">w</span>     <span class="dolgoVowels">o</span>     <span class="dolgoLaterals">l</span>     d     <span class="dolgoVowels">e</span>     <span class="dolgoMy">m</span>     <span class="dolgoVowels">o</span>     <span class="dolgoLaterals">r</span>     t
<span class="LineNr">12 </span><span class="msaTaxa">German.</span>     <span class="dolgoGlides">w</span>     <span class="dolgoVowels">a</span>     <span class="dolgoLaterals">l</span>     d     <span class="dolgoVowels">e</span>     <span class="dolgoMy">m</span>     <span class="dolgoVowels">a</span>     <span class="dolgoLaterals">r</span>     -
<span class="LineNr">13 </span>
</pre>
<!--<h4><a class="toc-backref" href="#contents">Multiple Alignments (MSQ and MSA)</a></h4>-->
<p>A specific format for text files containing multiple unaligned sequences is the MSQ-format.
Files in this
format should have the extension <tt class="docutils literal">msq</tt>. The first line of an msq-file contains information regarding
the dataset. The second line contains information regarding the sequence (meaning, identifier), and
the following lines contain the name of the taxa in the first column and the sequences in IPA format
in the second column, separated by a tabstop. As an example, consider the file <a href="data/harry_potter.msq">harry_potter.msq</a>:</p>

<pre id='vimCodeElement'>
<span class="LineNr">1 </span><span class="dataSet">Harry Potter Testset</span>
<span class="LineNr">2 </span><span class="seqId">Woldemort (in different languages)</span>
<span class="LineNr">3 </span><span class="msaTaxa">English</span>     <span class="dolgoGlides">v</span> <span class="dolgoVowels">o</span> <span class="dolgoLaterals">l</span> <span class="dolgoDentals">d</span> <span class="dolgoVowels">e</span> <span class="dolgoMy">m</span> <span class="dolgoVowels">o</span> <span class="dolgoLaterals">r</span> <span class="dolgoDentals">t</span>
<span class="LineNr">4 </span><span class="msaTaxa">German</span>      <span class="dolgoGlides">w</span> <span class="dolgoVowels">a</span> <span class="dolgoLaterals">l</span> <span class="dolgoDentals">d</span> <span class="dolgoVowels">e</span> <span class="dolgoMy">m</span> <span class="dolgoVowels">a</span> <span class="dolgoLaterals">r</span>
<span class="LineNr">5 </span><span class="msaTaxa">Russian</span>     <span class="dolgoGlides">v</span> <span class="dolgoLaterals">l</span> <span class="dolgoVowels">a</span> <span class="dolgoDentals">d</span> <span class="dolgoVowels">i</span> <span class="dolgoMy">m</span> <span class="dolgoVowels">i</span> <span class="dolgoLaterals">r</span>
</pre>
<p>The msa-format is a specific format for text files containing already aligned sequence pairs. Files
in this format should have the extension <tt class="docutils literal">msa</tt>. The first line of a MSA-file contains information
regarding the dataset. The second line contains information regarding the sequence (its meaning, the
protoform corresponding to the cognate set, etc.). The aligned sequences are given in the following
lines, whereas the taxa are given in the first column and the aligned segments in the following
columns. Additionally, there may be a specific line indicating the presence of swaps and a specific
line indicating highly consistent sites (local peaks) in the MSA. The line for swaps starts with the
headword SWAPS whereas a plus character (+) marks the beginning of a swapped region, the dash
character (-) its center and another plus character the end. All sites which are not affected by
swaps contain a dot. The line for local peaks starts with the headword LOCAL. All sites which are
highly consistent are marked with an asterisk (*), all other sites are marked with a dot (.). As an
example, consider the file <a href="data/harry_potter.msa">harry_potter.msa</a>:</p>

<pre id='vimCodeElement'>
<span class="LineNr">1 </span><span class="dataSet">Harry Potter Testset</span>
<span class="LineNr">2 </span><span class="seqId">Woldemort (in different languages)</span>
<span class="LineNr">3 </span><span class="msaTaxa">English</span>     <span class="dolgoGlides">v</span>     <span class="dolgoVowels">o</span>     <span class="dolgoLaterals">l</span>     -     <span class="dolgoDentals">d</span>     <span class="dolgoVowels">e</span>     <span class="dolgoMy">m</span>     <span class="dolgoVowels">o</span>     <span class="dolgoLaterals">r</span>     <span class="dolgoDentals">t</span>
<span class="LineNr">4 </span><span class="msaTaxa">German.</span>     <span class="dolgoGlides">w</span>     <span class="dolgoVowels">a</span>     <span class="dolgoLaterals">l</span>     -     <span class="dolgoDentals">d</span>     <span class="dolgoVowels">e</span>     <span class="dolgoMy">m</span>     <span class="dolgoVowels">a</span>     <span class="dolgoLaterals">r</span>     -
<span class="LineNr">5 </span><span class="msaTaxa">Russian</span>     <span class="dolgoGlides">v</span>     -     <span class="dolgoLaterals">l</span>     <span class="dolgoVowels">a</span>     <span class="dolgoDentals">d</span>     <span class="dolgoVowels">i</span>     <span class="dolgoMy">m</span>     <span class="dolgoVowels">i</span>     <span class="dolgoLaterals">r</span>     -
<span class="LineNr">6 </span><span class="swapSites">SWAPS..     .     +     -     +     .     .     .     .     .     .</span>
<span class="LineNr">7 </span><span class="localPeaks">LOCAL.      *     *     *     .     *     *     *     *     *     .</span>
</pre>



 </div>
 </div>
 <div id="footer">
 <p>Last updated on Jan. 02, 2014, 12:38 CET</p>
 <p>
This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/deed.en_US">Creative Commons Attribution-NonCommercial 3.0 Unported License</a>.</p><br>
<p>
   <a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/deed.en_US"><img
		alt="Creative Commons License" style="border-width:0;width:80px;"
		src="http://i.creativecommons.org/l/by-nc/3.0/88x31.png" /></a> </p>
 
 </div><!-- end footer -->

</div><!-- end wrapper-->
</body>
</html>
