<?php

session_start();

if (empty($_SESSION['count'])) {
   $_SESSION['count'] = 1;
} else {
   $_SESSION['count']++;
}
?>

<p>
Hello WILINE USER , you have seen this page <?php echo $_SESSION['count']; ?> times.
</p>

