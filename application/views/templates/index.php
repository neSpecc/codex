<?
    /** New Year Landing */
    //include 'landings/new_year.php';
?>
<?
    /** Joining meetup */
    // include 'landings/meetup.php';
    // include 'landings/masterclass.php';
?>
<div class="index-page">
    <div class="center_side">


        <?
            /**
            * Contests promotion
            */
            /*
            <div class="contest_alert">
                <a href="/contest/2">конкурс на создание ui kit »</a>
                <div class="line"></div>
            </div>
            */
        ?>



        <div class="codex-logo"></div>
        <p>CodeX is a new club based in ITMO University, joining students and graduates interested in web-development, design and studying new technologies on the practise.</p>
        <p>Our goal — make team with young specialists with burning eyes and idealistic spirits.</p>

        <?
            /** News list */
            include 'news.php';
        ?>

        <?
            /** News list */
            include 'articles-preview.php';
        ?>

        <?
            /** Best developers block */
            include 'developers.php';
        ?>

    </div>
</div>
