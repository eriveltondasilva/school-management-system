<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class SearchServices
{
    public function searchPerson(Model $model, string $searchTerm, array $columns)
    {
        $query = $model::select($columns)
        ->where(function (Builder $query) use ($searchTerm) {
            $query->where('id', $searchTerm)
                ->orWhere('name', 'like', "%{$searchTerm}%");
        })
        ->latest('id')
        ->paginate(20);

        return $query;
    }
}
