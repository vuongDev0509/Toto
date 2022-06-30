
<?php 
$tpl_vd   = get_fields();
$toto_bus = $tpl_vd['video_step'];
$list_ids = array();

if(!empty($toto_bus)){
    foreach( $toto_bus as $item ):
        $items = $item['item_step_video'];    
        if(!empty($items)){
            foreach( $items as $menu ):
                $slug_item = sanitize_title($menu['name_item_step_video']);
                $type_menu = sanitize_title($menu['type']);
                if($type_menu == 'content' && !in_array($menu['content'],$list_ids)){
                    $list_ids[] = $menu['content']; ?>
                    <section id="ss-<?php echo $menu['content'] ?>" class="bt-section ss-for-toto-bus bt-section-<?php echo $slug_item; ?> bt-<?php echo $slug_item; ?> ">
                       <?php echo do_shortcode('[elementor-template id="'.$menu['content'].'"]'); ?>
                       <div class="bt-comeback">
                           <?php get_template_part('template-parts/content/content', 'comeback' ); ?>
                       </div>
                    </section>  
                <?php     
                }
            endforeach;  
        }      
    endforeach;
}