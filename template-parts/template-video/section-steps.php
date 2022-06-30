<?php
$tpl_vd        = get_fields();
$second_videos = $tpl_vd['items_second_videos'];
$toto_bus      = $tpl_vd['video_step'];
$timelines     = $tpl_vd['list_items_page_2_tplvd'];

$all_id  = [];
$list_ids = array();

if(!empty($second_videos)){
    foreach ($second_videos as $key => $items) {
        if($items['menu']){
            $item_menus = $items['menu']; ?>
                
            <?php foreach( $item_menus as $menu ): 
                $slugItem = sanitize_title($menu['item']);
                $type_menu = sanitize_title($menu['type']);
                if($type_menu == 'content'){
                    array_push($all_id, $menu['content']);
                }
            endforeach;  
        } 
    }
}

if(!empty($toto_bus)){
    foreach( $toto_bus as $item ):
        $items = $item['item_step_video'];    
        if(!empty($items)){
            foreach( $items as $menu ):
                $slug_item = sanitize_title($menu['name_item_step_video']);
                $type_menu = sanitize_title($menu['type']);
                if($type_menu == 'content'){
                    array_push($all_id, $menu['content']);
                }
            endforeach;  
        }      
    endforeach;
}

if(!empty($timelines)){
    foreach( $timelines as $item ):
        $timeline = $item['items_timelines'];    
        foreach ($timeline as $key => $item):
            $items = $item['menu'];
                if(!empty($items)){
                    foreach( $items as $menu ):
                        $slug_item = sanitize_title($menu['name_item_step_video']);
                        $type_menu = sanitize_title($menu['type']);
                        if($type_menu == 'content'){
                            array_push($all_id, $menu['content']);
                        }
                    endforeach;  
                }  
        endforeach;      
    endforeach;
}



$list_sections = array_unique($all_id);
if(!empty($list_sections)){
    foreach( $list_sections as $item ): ?>
        <section id="ss-<?php echo $item ?>" class="bt-section bt-section-steps">
            <?php echo do_shortcode('[elementor-template id="'.$item.'"]'); ?>
            <div class="bt-comeback">
                <?php get_template_part('template-parts/content/content', 'comeback' ); ?>
            </div>
        </section>
    <?php 
    endforeach;  
}