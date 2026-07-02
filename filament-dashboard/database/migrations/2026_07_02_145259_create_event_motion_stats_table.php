<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('event_motion_stats', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('left_value')->default(0);
            $table->string('left_label');
            $table->unsignedInteger('right_value')->default(0);
            $table->string('right_label');
            $table->boolean('highlight')->default(false);
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_motion_stats');
    }
};
