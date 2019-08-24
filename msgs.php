<?php if (count($msgs) > 0) : ?>
	<div class = "msgs">
		<?php foreach ($msgs as $msg) : ?>
			<p class = "msg">
				<?php echo $msg ?>
			</p>
		<?php endforeach ?>	
</div>
<?php endif ?>