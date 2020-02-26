<?php if (count($msgs) > 0) : ?>
	<div class = "msgs">
		<?php foreach ($msgs as $msg) : ?>
			<div class = "msg">
				<?php echo $msg ?>
			</div>
		<?php endforeach ?>	
</div>
<?php endif ?>